import { createSlice } from '@reduxjs/toolkit';

const titlesSlice = createSlice({
  name: 'titles',
  initialState: {
    recipeTitle: 'Ohje',
    ingredientsTitle: 'Ainesosat',
    instructionsTitle: 'Ohje'
  },
  reducers: {
    changeTitles(state, action) {
      const { recipeTitle, ingredientsTitle, instructionsTitle } = action.payload;
      if (recipeTitle) return { ...state, recipeTitle };
      if (ingredientsTitle) return { ...state, ingredientsTitle };
      if (instructionsTitle) return { ...state, instructionsTitle };
    }
  }
});

export const { changeTitles } = titlesSlice.actions;
export default titlesSlice.reducer;