import { createSlice } from '@reduxjs/toolkit';

const targetPortionsSlice = createSlice({
  name: 'targetPortions',
  initialState: 2,
  reducers: {
    setTargetPortionsAmount(state, action) {
      return action.payload;
    }
  }
});

export const { setTargetPortionsAmount } = targetPortionsSlice.actions;
export default targetPortionsSlice.reducer;