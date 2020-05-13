/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../services/npmsAPI';

export const fetchPackages = createAsyncThunk(
  'searchResults/getPackages',
  async (searchTerm, thunkAPI) => {
    const response = await npmsAPI(searchTerm);
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
    [fetchPackages.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchPackages.fulfilled]: (state, action) => {
      state.packs = action.payload.results;
      state.loading = 'idle';
    },
  },
});

const { actions, reducer } = searchResultsSlice;

export const { searchFor } = actions;

export default reducer;
