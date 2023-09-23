import { comicsSelectors, hooks } from '../../state';
import Heart from '../../assets/images/heart.svg';

import * as S from './styles';

export const Footer = () => {
  const { useAppSelector } = hooks;

  const { selectComics } = comicsSelectors;
  const { isFetching, attribution } = useAppSelector(selectComics);
  return (
    <>
      {!isFetching && (
        <S.Wrapper>
          <p>{attribution}</p>
          <p>
            Made with <img src={Heart} alt='love' /> using React by{' '}
            <a
              href='https://github.com/PedroFedeCasillas/my-marvel-comics'
              target='_blank'
              rel='noreferrer'
            >
              Pedro Fede Casillas
            </a>
          </p>
        </S.Wrapper>
      )}
    </>
  );
};
