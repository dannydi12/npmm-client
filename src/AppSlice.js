/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from './services/npmmAPI';

export const fetchPackages = createAsyncThunk(
  'collections/getPackages',
  async (searchTerm, thunkAPI) => {
    const response = await npmmAPI(searchTerm);
    return response;
  }
);

export const collectionsSlice = createSlice({
  name: 'collections',
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

export default collectionsSlice.reducer;
