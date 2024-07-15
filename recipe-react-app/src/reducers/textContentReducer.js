import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
  }
];

const textContentSlice = createSlice({
  name: 'textContents',
  initialState,
  reducers: {
    setTextContent(state, action) {
      return action.payload;
    },
    createTextContent(state, action) {
      const nextID = action.payload;
      state.push({
        id: nextID
      });
    },
    removeTextContent(state, action) {
      const id = action.payload;
      return state.filter(textContent => id !== textContent.id);
    },
    updateTextContent(state, action) {
      const { id, title, text } = action.payload;
            
      const textContentToChange = state.find(textContent => id === textContent.id);

      const changedTextContent = {
        ...textContentToChange,
        title,
        text
      };

      return state.map(textContent =>
        textContent.id !== id ? textContent : changedTextContent
      );
    },
  }
});

export const { setTextContent, createTextContent, removeTextContent, updateTextContent } = textContentSlice.actions;
export default textContentSlice.reducer;