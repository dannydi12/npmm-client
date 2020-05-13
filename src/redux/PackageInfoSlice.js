/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../services/npmsAPI';

export const fetchPackageInfo = createAsyncThunk(
  'packageInfo/fetchPackageInfo',
  async (id, thunkAPI) => {
    const response = await npmmAPI.getCollectionInfo(id);
    return response;
  }
);

export const packageInfo = createSlice({
  name: 'packageInfo',
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
    [fetchCollectionInfo.rejected]: (state) => {
      state.loading = 'rejected';
    },
  },
});

export default packageInfo.reducer;
