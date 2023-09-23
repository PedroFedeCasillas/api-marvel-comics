import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from './ducks/comics/reducers';

const reducer = {
  comics: comicsReducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
