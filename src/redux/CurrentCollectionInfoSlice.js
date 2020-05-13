/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../services/npmmAPI';

export const fetchCollectionInfo = createAsyncThunk(
  'currentCollectionInfo/fetchCollectionInfo',
  async (id, thunkAPI) => {
    const response = await npmmAPI.getCollectionInfo(id);
    return response;
  }
);

export const deletePackage = createAsyncThunk(
  'currentCollectionInfo/deletePackage',
  async (pack, thunkAPI) => {
    const response = await npmmAPI.deletePackage(pack.name, pack.collectionId);
    return response;
  }
);

export const currentCollectionInfo = createSlice({
  name: 'currentCollectionInfo',
  initialState: {
    name: null,
    packages: [],
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCollectionInfo.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCollectionInfo.fulfilled]: (state, action) => {
      state.packages = action.payload;
      state.loading = 'idle';
    },
    [deletePackage.fulfilled]: (state, action) => {
      state.packages.slice(
        state.packages.findIndex((pack) => pack.id === action.payload, 1)
      );
    },
  },
});

export default currentCollectionInfo.reducer;
