import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };
const authInitialState = { isAuth: false };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement() {},
  },
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export const reducerActions = counterSlice.actions;
