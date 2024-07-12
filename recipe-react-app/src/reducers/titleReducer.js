import { createSlice } from '@reduxjs/toolkit';

const titleSlice = createSlice({
  name: 'title',
  initialState: 'Otsikko',
  reducers: {
    changeTitle(state, action) {
      return action.payload;
    }
  }
});

export const { changeTitle } = titleSlice.actions;
export default titleSlice.reducer;