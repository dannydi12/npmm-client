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

export const deletePackage = createAsyncThunk(
  'currentCollection/addPackage',
  async (pack, thunkAPI) => {
    const response = await npmmAPI.deletePackage(pack.name, pack.collectionId);
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
    [deletePackage.fulfilled]: (state, action) => {
      state.packages.slice(
        state.packages.findIndex((pack) => pack.id === action.payload, 1)
      );
    },
  },
});

export default currentCollectionSlice.reducer;
