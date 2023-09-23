import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  EmptyFavoriteIcon,
  FilledFavoriteIcon,
  Loading,
} from '../../components';
import { ComicType, CreatorType } from '../../constants/genericTypes';
import { MONTHS } from '../../constants/months';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';

export const ComicDetails = () => {
  const params = useParams();
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();
  const { getComicDetails, addFavorite } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { isFetching, favorites } = useAppSelector(selectComics);

  const [comic, setComic] = useState<ComicType>();
  const [creators, setCreators] = useState<CreatorType[]>([]);

  const handleAddFavorite = (comic: ComicType) => {
    dispatch(addFavorite(comic));
  };

  const isFavorite = (comic: ComicType) => {
    const isFound = favorites.find((item) => item.id === comic.id);
    if (isFound) {
      return true;
    }
    return false;
  };

  const dateConverter = (timestamp: string) => {
    const date = new Date(timestamp);
    const month = MONTHS[date.getMonth() - 1];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month.name} ${day}, ${year}`;
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getComicDetails(params.id)).then((response: any) =>
        setComic(response.payload.data.data.results[0])
      );
    }
  }, [dispatch, getComicDetails, params]);

  useEffect(() => {
    if (comic) {
      setCreators(comic.creators.items);
    }
  }, [comic]);

  return (
    <S.ComicDetailsWrapper>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {comic && (
            <S.ComicDetails>
              <S.ImageContainer>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt=''
                />
              </S.ImageContainer>
              <div>
                <div>
                  <S.ComicDetailsHeader>
                    <h1>{comic.title}</h1>
                    {isFavorite(comic) ? (
                      <FilledFavoriteIcon
                        onClick={() => handleAddFavorite(comic)}
                      />
                    ) : (
                      <EmptyFavoriteIcon
                        onClick={() => handleAddFavorite(comic)}
                      />
                    )}
                  </S.ComicDetailsHeader>
                  <h2>Published:</h2>
                  <p>{dateConverter(comic.dates[0].date)}</p>
                </div>
                <S.CreatorsWrapper>
                  {creators.length &&
                    creators.map((creator: CreatorType) => (
                      <div key={creator.resourceURI}>
                        <h2>{creator.role}:</h2>
                        <p>{creator.name}</p>
                      </div>
                    ))}
                </S.CreatorsWrapper>
                {comic.description && (
                  <>
                    <h2>Description</h2>
                    <p>{comic.description}</p>
                  </>
                )}
                <a href={comic.urls[0].url} target='_blank' rel='noreferrer'>
                  Check on Marvel's website
                </a>
              </div>
            </S.ComicDetails>
          )}
        </>
      )}
    </S.ComicDetailsWrapper>
  );
};
