import { EmptyFavoriteIcon, FilledFavoriteIcon } from '..';

import * as S from './styles';

export type ComicCardProps = {
  thumbnailUrl: string;
  title: string;
  handleAddFavorite: () => void;
  isFavorite: boolean;
  detailsUrl: string;
  marvelUrl: string;
};

export const ComicCard = ({
  thumbnailUrl,
  title,
  handleAddFavorite,
  isFavorite,
  detailsUrl,
  marvelUrl,
}: ComicCardProps) => {
  return (
    <S.Wrapper>
      <S.FavoriteIconWrapper>
        {isFavorite ? (
          <FilledFavoriteIcon onClick={() => handleAddFavorite()} isComicCard />
        ) : (
          <EmptyFavoriteIcon onClick={() => handleAddFavorite()} isComicCard />
        )}
      </S.FavoriteIconWrapper>
      <S.StyledLink to={detailsUrl}>
        <img src={thumbnailUrl} alt='' />
        <p>{title}</p>
      </S.StyledLink>
      <a href={marvelUrl} target='_blank' rel='noreferrer'>
        Check on Marvel's website
      </a>
    </S.Wrapper>
  );
};
