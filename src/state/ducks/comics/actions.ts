import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ComicType } from '../../../constants/genericTypes';

const COMICS_URL = 'https://gateway.marvel.com:443/v1/public/comics';

const ts = '1';
const apikey = '7e994420fae9b225d26c4e9a0f45223f';
const hash = '1d5cbf8f83e384a959f2efdb610fed3c';
const dateRange = '2020-01-01,2023-09-01';

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
