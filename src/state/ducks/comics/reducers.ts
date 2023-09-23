import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { ComicType } from '../../../constants/genericTypes';
import actions from './actions';

export type ComicsState = {
  comics: ComicType[];
  favorites: ComicType[];
  offset: number;
  pages: number;
  attribution: string;
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: ComicsState = {
  comics: [],
  favorites: [],
  offset: 0,
  pages: 1,
  attribution: 'Data provided by Marvel. © 2022 MARVEL',
  isFetching: false,
  error: undefined,
};

const comicsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getComics.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getComics.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.comics = action.payload.data.data.results;
      state.offset = action.payload.data.data.offset;
      state.pages = Math.ceil(action.payload.data.data.total / 20);
      state.attribution = action.payload.data.attributionText;
    })
    .addCase(actions.getComics.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.getComicDetails.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.getComicDetails.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.attribution = action.payload.data.attributionText;
    })
    .addCase(actions.getComicDetails.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.searchComics.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.searchComics.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
      state.comics = action.payload.data.data.results;
      state.offset = action.payload.data.data.offset;
      state.pages = Math.ceil(action.payload.data.data.total / 20);
      state.attribution = action.payload.data.attributionText;
    })
    .addCase(actions.searchComics.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.getAutocompleteOptions.pending, (state) => {
      state.isFetching = false;
    })
    .addCase(actions.getAutocompleteOptions.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.getAutocompleteOptions.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.addFavorite.pending, (state) => {
      state.isFetching = false;
    })
    .addCase(actions.addFavorite.fulfilled, (state, action) => {
      const { id } = action.payload;
      const alreadyFavorite = state.favorites.find((item) => item.id === id);
      if (alreadyFavorite) {
        const updatedFavorites = state.favorites.filter(
          (item) => item.id !== id
        );
        state.favorites = updatedFavorites;
        return;
      } else {
        state.favorites.push(action.payload);
      }
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.addFavorite.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default comicsReducer;
