import { createSlice } from '@reduxjs/toolkit';

export const menuScrollSlice = createSlice({
  name: 'menuScroll',
  initialState: {
    allowScroll: false,
  },
  reducers: {
    setAllowScroll: (state, action) => {
      state.allowScroll = !!action.payload;
    },
  },
});

const { actions, reducer } = menuScrollSlice;

export const { setAllowScroll } = actions;

export default reducer;
