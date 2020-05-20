/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const navMenuSlice = createSlice({
  name: 'navMenu',
  initialState: {
    showMore: false,
  },
  reducers: {
    setShowMore: (state, action) => {
      state.showMore = !!action.payload;
    },
  },
});

const { actions, reducer } = navMenuSlice;

export const { setShowMore } = actions;

export default reducer;
