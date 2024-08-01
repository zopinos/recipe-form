import { createSlice } from '@reduxjs/toolkit';

const titleSlice = createSlice({
  name: 'title',
  initialState: '',
  reducers: {
    setTitle(state, action) {
      return action.payload;
    }
  }
});

export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;