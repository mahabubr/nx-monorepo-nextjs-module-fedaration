import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';

// Configure the store
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

// Use `typeof` to infer the store’s types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
