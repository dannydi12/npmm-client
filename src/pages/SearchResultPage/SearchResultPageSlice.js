/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../../services/npmsAPI';

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
    packs: [],
    loading: null,
  },
  reducers: {},
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

export default searchResultsSlice.reducer;
