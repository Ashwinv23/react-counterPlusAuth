import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, authSlice } from './reducerSlice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
