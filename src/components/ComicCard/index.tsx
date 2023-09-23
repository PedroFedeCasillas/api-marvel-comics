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
     
    </S.Wrapper>
  );
};
