import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ComicsGrid, Loading } from '../../components';
import { comicsOperations, comicsSelectors, hooks } from '../../state';
import { CustomPagination } from '../../components/Pagination';
import { checkPage } from '../../utils/pageHelper';

import * as S from './styles';

export const Home = () => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { getComics } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { comics, isFetching, pages } = useAppSelector(selectComics);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!comics.length && !params.page && currentPage === 1) {
      dispatch(getComics(0));
    }
    if (
      !comics.length &&
      params.page &&
      parseInt(params.page) === currentPage
    ) {
      const offset = (currentPage - 1) * 20;

      dispatch(getComics(offset));
    }
  }, [dispatch, getComics, currentPage, params, comics]);

  const handlePageChange = (e: any) => {
    const page = checkPage(e, currentPage);
    const offset = (page - 1) * 20;
    setCurrentPage(page);
    dispatch(getComics(offset));
    navigate(`/${page}`);
  };

  useEffect(() => {
    if (params.page) {
      setCurrentPage(parseInt(params.page));
    }
  }, [params]);

  return (
    <S.ComicsWrapper>
      <Helmet>
        <title>Home | Comic Search</title>
      </Helmet>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {comics.length ? (
            <>
              <ComicsGrid comics={comics} />
              <CustomPagination
                count={pages}
                onChange={handlePageChange}
                page={currentPage}
              />
            </>
          ) : (
            <S.StyledTextBox>
              <p>NO MATCHES FOUND!</p>
            </S.StyledTextBox>
          )}
        </>
      )}
    </S.ComicsWrapper>
  );
};
