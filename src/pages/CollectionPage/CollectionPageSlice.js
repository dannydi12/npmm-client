/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    amount: 2,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state) => {
      state.value += state.amount;
    },
    changeAmount: (state, action) => {
      state.amount = Number(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  changeAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
