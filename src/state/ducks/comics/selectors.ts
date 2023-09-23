import { RootState } from '../../store';

const selectComics = (state: RootState) => state.comics;

const comicsSelectors = {
  selectComics,
};

export default comicsSelectors;
