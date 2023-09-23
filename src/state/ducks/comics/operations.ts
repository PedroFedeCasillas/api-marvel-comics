import actions from './actions';

const comicsOperations = {
  getComics: actions.getComics,
  getComicDetails: actions.getComicDetails,
  searchComics: actions.searchComics,
  getAutocompleteOptions: actions.getAutocompleteOptions,
  addFavorite: actions.addFavorite,
};

export default comicsOperations;
