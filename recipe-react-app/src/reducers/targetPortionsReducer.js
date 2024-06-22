import { createSlice } from '@reduxjs/toolkit';

const targetPortionsSlice = createSlice({
  name: 'targetPortions',
  initialState: 1,
  reducers: {
    changeTargetPortionsAmount(state, action) {
      return action.payload;
    }
  }
});

export const { changeTargetPortionsAmount } = targetPortionsSlice.actions;
export default targetPortionsSlice.reducer;