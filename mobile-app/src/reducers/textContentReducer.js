import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

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
    createTextContent(state) {
      return state.concat({ id: uuidv1() });
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