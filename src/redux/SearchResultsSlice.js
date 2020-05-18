/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../services/npmsAPI';

export const getPackages = createAsyncThunk(
  'searchResults/getPackages',
  async (options, thunkAPI) => {
    const response = await npmsAPI.searchPackages(
      options.searchTerm,
      options.offset
    );
    return response;
  }
);

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    searchTerm: null,
    packs: [],
    loading: null,
  },
  reducers: {
    searchFor: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: {
    [getPackages.pending]: (state) => {
      state.loading = 'pending';
    },
    [getPackages.fulfilled]: (state, action) => {
      state.packs.push(...action.payload.results);
      state.loading = 'idle';
    },
  },
});

const { actions, reducer } = searchResultsSlice;

export const { searchFor } = actions;

export default reducer;
