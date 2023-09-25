import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ComicType } from '../../../constants/genericTypes';

const API_URL = process.env.REACT_APP_API_URL;

const ts = process.env.REACT_APP_TS;
const apikey = process.env.REACT_APP_APIKEY;
const hash = process.env.REACT_APP_HASH;
const dateRange = process.env.REACT_APP_DATE_RANGE;

const getComics = createAsyncThunk(
  'comics/getComics',
  async (offset: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${API_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&dateRange=${dateRange}&offset=${offset}`
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
        `${API_URL}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
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
        `${API_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&titleStartsWith=${search}&offset=${offset}`
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
        `${API_URL}?ts=${ts}&apikey=${apikey}&hash=${hash}&titleStartsWith=${search}`
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
