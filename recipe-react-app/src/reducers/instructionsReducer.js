import { createSlice } from '@reduxjs/toolkit';

const instructionsSlice = createSlice({
  name: 'instructions',
  initialState: '',
  reducers: {
    changeInstructions(state, action) {
      return action.payload;
    }
  }
});

export const { changeInstructions } = instructionsSlice.actions;
export default instructionsSlice.reducer;