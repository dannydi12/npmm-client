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
  async (id, thunkAPI) => {
    const response = await npmmAPI.deletePackage(id);
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
      state.name = action.payload.name;
      state.loading = 'idle';
    },
    [deletePackage.fulfilled]: (state, action) => {
      state.packages = state.packages.filter(
        (pack) => pack.id !== Number(action.payload)
      );
    },
    [addPackage.fulfilled]: (state, action) => {
      console.log('fulfilled');
    },
    [addPackage.rejected]: (state, action) => {
      console.log('erorr');
    },
  },
});

export default currentCollectionInfo.reducer;
