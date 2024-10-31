import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Export the ExampleState type
export interface ExampleState {
  value: number;
}

const initialState: ExampleState = { value: 0 };

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, setValue } = exampleSlice.actions;
export default exampleSlice.reducer;
