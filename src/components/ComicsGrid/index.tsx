import { ComicCard } from '..';
import { ComicType } from '../../constants/genericTypes';
import { comicsOperations, comicsSelectors, hooks } from '../../state';

import * as S from './styles';

export type ComicsGridProps = {
  comics: ComicType[];
};

export const ComicsGrid = ({ comics }: ComicsGridProps) => {
  const { useAppDispatch, useAppSelector } = hooks;
  const dispatch = useAppDispatch();

  const { addFavorite } = comicsOperations;
  const { selectComics } = comicsSelectors;
  const { favorites } = useAppSelector(selectComics);

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

  return (
    <S.ComicsGrid>
      {comics.map((comic: ComicType) => (
        <ComicCard
          thumbnailUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          title={comic.title}
          handleAddFavorite={() => handleAddFavorite(comic)}
          isFavorite={isFavorite(comic)}
          key={comic.id}
          detailsUrl={`/comic/${comic.id}`}
          marvelUrl={comic.urls[0].url}
        />
      ))}
    </S.ComicsGrid>
  );
};
