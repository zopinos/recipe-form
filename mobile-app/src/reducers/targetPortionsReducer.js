import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portions: 4,
  included: true
};

const targetPortionsSlice = createSlice({
  name: 'targetPortions',
  initialState,
  reducers: {
    setTargetPortionsAmount(state, action) {
      return action.payload;
    }
  }
});

export const { setTargetPortionsAmount } = targetPortionsSlice.actions;
export default targetPortionsSlice.reducer;