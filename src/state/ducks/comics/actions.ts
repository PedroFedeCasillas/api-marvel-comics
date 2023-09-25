import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ComicType } from '../../../constants/genericTypes';
console.log(process.env.API_URL);

const API_URL = process.env.API_URL;

const TS = process.env.TS;
const REACT_APP_MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const REACT_APP_MARVEL_MD5_HASH = process.env.REACT_APP_MARVEL_MD5_HASH;
const DATE_RANGE = process.env.DATE_RANGE;

const getComics = createAsyncThunk(
  'comics/getComics',
  async (offset: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${API_URL}?ts=${TS}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${REACT_APP_MARVEL_MD5_HASH}&dateRange=${DATE_RANGE}&offset=${offset}`
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
        `${API_URL}/${id}?ts=${TS}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${REACT_APP_MARVEL_MD5_HASH}`
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
        `${API_URL}?ts=${TS}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${REACT_APP_MARVEL_MD5_HASH}&titleStartsWith=${search}&offset=${offset}`
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
        `${API_URL}?ts=${TS}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${REACT_APP_MARVEL_MD5_HASH}&titleStartsWith=${search}`
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
