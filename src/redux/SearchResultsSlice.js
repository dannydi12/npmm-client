/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../services/npmsAPI';

export const getPackages = createAsyncThunk(
  'searchResults/getPackages',
  async (options) => {
    const response = await npmsAPI.searchPackages(
      options.searchTerm,
      options.offset
    );
    response.infiniteLoad = !!options.offset;
    return response;
  }
);

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    searchTerm: null,
    packs: [],
    loading: null,
    noMoreResults: false,
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
      if (action.payload.infiniteLoad) {
        state.packs.push(...action.payload.results);
      } else {
        state.packs = action.payload.results;
      }

      if (action.payload.results.length === 0) {
        state.noMoreResults = true;
      }

      state.loading = 'idle';
    },
  },
});

const { actions, reducer } = searchResultsSlice;

export const { searchFor } = actions;

export default reducer;
