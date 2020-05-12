/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../../services/npmmAPI';

export const getCollections = createAsyncThunk(
  'collectionList/getCollections',
  async (thunkAPI) => {
    const response = await npmmAPI.getCollections();
    return response;
  }
);

export const collectionListSlice = createSlice({
  name: 'collectionList',
  initialState: {
    collections: [],
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [getCollections.pending]: (state) => {
      state.loading = 'pending';
    },
    [getCollections.fulfilled]: (state, action) => {
      state.packages = action.payload;
      state.loading = 'idle';
    },
  },
});

export default collectionListSlice.reducer;
