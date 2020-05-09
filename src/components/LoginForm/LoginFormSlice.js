/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    currentUser: false,
  },
  reducers: {
    loginUser: (state) => {
      state.currentUser = true;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;
