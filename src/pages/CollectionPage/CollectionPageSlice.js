/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../../services/npmmAPI';

export const fetchCollection = createAsyncThunk(
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
    [fetchCollection.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCollection.fulfilled]: (state, action) => {
      state.packages = action.payload;
      state.loading = 'idle';
    },
  },
});

export default currentCollectionSlice.reducer;
