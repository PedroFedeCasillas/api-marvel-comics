import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ComicType } from '../../../constants/genericTypes';

const COMICS_URL = 'https://gateway.marvel.com/v1/public/comics';

const ts = '1660759425';
const apikey = '1da8adb9d8fdb7ffb3cc16b00643ae7c';
const hash = '74cd6b9fa89759bb0f008095503f3212';
const dateRange = '2020-01-01,2022-01-01';

const getComics = createAsyncThunk(
  'comics/getComics',
  async (offset: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${COMICS_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&dateRange=${dateRange}&offset=${offset}`
      );
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const getComicDetails = createAsyncThunk(
  'comics/getComicsDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${COMICS_URL}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
      );
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const searchComics = createAsyncThunk(
  'comics/searchComics',
  async (params: any, { rejectWithValue }) => {
    const { search, offset } = params;
    try {
      const { data } = await axios.get(
        `${COMICS_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&titleStartsWith=${search}&offset=${offset}`
      );
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const getAutocompleteOptions = createAsyncThunk(
  'comics/getAutocompleteOptions',
  async (search: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${COMICS_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&titleStartsWith=${search}`
      );
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const addFavorite = createAsyncThunk(
  'comics/addFavorite',
  async (comic: ComicType, { rejectWithValue }) => {
    try {
      return comic;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const comicsActions = {
  getComics,
  getComicDetails,
  searchComics,
  getAutocompleteOptions,
  addFavorite,
};

export default comicsActions;
