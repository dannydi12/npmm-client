/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmmAPI from '../services/npmmAPI';

export const fetchCollectionInfo = createAsyncThunk(
  'currentCollectionInfo/fetchCollectionInfo',
  async (options, thunkAPI) => {
    const response = await npmmAPI.getCollectionInfo(
      options.id,
      options.offset
    );
    response.infiniteLoad = !!options.offset;
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
    hasNoMoreResults: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCollectionInfo.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCollectionInfo.fulfilled]: (state, action) => {
      if (action.payload.infiniteLoad) {
        state.packages.push(...action.payload.packs);
      } else {
        state.packages = action.payload.packs;
        state.name = action.payload.name;
      }

      if (action.payload.packs.length === 0) {
        state.noMoreResults = true;
      }

      state.loading = 'idle';
    },
    [deletePackage.fulfilled]: (state, action) => {
      state.packages = state.packages.filter(
        (pack) => pack.id !== Number(action.payload)
      );
    },
  },
});

export default currentCollectionInfo.reducer;
