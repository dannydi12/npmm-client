/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../../services/npmmAPI';

export const fetchPackages = createAsyncThunk(
  'currentCollection/getPackages',
  async (id, thunkAPI) => {
    const response = await npmmAPI.getCollectionInfo(id);
    return response;
  }
);

export const currentCollectionSlice = createSlice({
  name: 'currentCollection',
  initialState: {
    name: null,
    packages: [],
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPackages.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchPackages.fulfilled]: (state, action) => {
      state.collectionPacks = action.payload.packages;
      state.loading = 'idle';
    },
  },
});

export default currentCollectionSlice.reducer;
