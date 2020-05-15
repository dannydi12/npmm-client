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

export const addPackage = createAsyncThunk(
  'currentCollectionInfo/addPackage',
  async (pack, thunkAPI) => {
    const response = await npmmAPI.addPackage(pack.name, pack.collectionId);
    return response;
  }
);

export const currentCollectionInfo = createSlice({
  name: 'currentCollectionInfo',
  initialState: {
    name: null,
    packages: [],
    loading: null,
    inEditingMode: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCollectionInfo.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCollectionInfo.fulfilled]: (state, action) => {
      state.packages = action.payload.packs;
      state.loading = 'idle';
    },
    [deletePackage.fulfilled]: (state, action) => {
      state.packages.slice(
        state.packages.findIndex((pack) => pack.id === action.payload, 1)
      );
    },
    [addPackage.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.packages.push(action.payload);
    },
    [addPackage.rejected]: (state, action) => {
      console.log('erorr');
    },
  },
});

export default currentCollectionInfo.reducer;
