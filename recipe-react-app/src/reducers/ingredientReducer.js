import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    name: 'muna',
    amount: '1',
  }
];

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    createIngredient(state, action) {
      const nextID = action.payload;
      state.push({
        id: nextID
      });
    },
    removeIngredient(state, action) {
      const id = action.payload;
      return state.filter(ingredient => id !== ingredient.id);
    },
    updateIngredient(state, action) {
      const { id, name, amount } = action.payload;
            
      const ingredientToChange = state.find(ingredient => id === ingredient.id);

      const changedIngredient = {
        ...ingredientToChange,
        name,
        amount
      };

      return state.map(ingredient =>
        ingredient.id !== id ? ingredient : changedIngredient
      );
    },
    changePortionAmount(state, action) {
      const { prevPortionAmount, newPortionAmount } = action.payload;

      return state.map(ingredient => {
        if (!ingredient.amount) return ingredient;

        const newIngredientAmount = ingredient.amount
          .split(' ')
          .map(part =>
            !Number(part)
              ? part
              : (Number(part) / (!prevPortionAmount ? 1 : prevPortionAmount) * newPortionAmount)
          )
          .join(' ');
        
        return {
          ...ingredient,
          amount: newIngredientAmount
        };
      });
    }
  }
});

export const { createIngredient, removeIngredient, updateIngredient, changePortionAmount } = ingredientSlice.actions;
export default ingredientSlice.reducer;