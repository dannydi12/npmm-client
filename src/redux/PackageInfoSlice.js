/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import npmsAPI from '../services/npmsAPI';

export const fetchPackageInfo = createAsyncThunk(
  'packageInfo/fetchPackageInfo',
  async (name) => {
    const response = await npmsAPI.getPackageInfo(name);
    return response;
  }
);

export const packageInfo = createSlice({
  name: 'packageInfo',
  initialState: {
    data: null,
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPackageInfo.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchPackageInfo.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = 'idle';
    },
    [fetchPackageInfo.rejected]: (state) => {
      state.loading = 'rejected';
    },
  },
});

export default packageInfo.reducer;
