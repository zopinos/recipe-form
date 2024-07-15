import { createSlice } from '@reduxjs/toolkit';
import { finnishNumberFormat } from '../util/constants';

const initialState = [
  {
    id: 0,
    ingredients: [{ id: 0 }]
  }
];

const ingredientSlice = createSlice({
  name: 'ingredientLists',
  initialState,
  reducers: {
    createIngredientList(state, action) {
      const nextID = action.payload;
      state.push({
        id: nextID,
        ingredients: [{ id: 0 }]
      });
    },
    removeIngredientList(state, action) {
      const id = action.payload;
      return state.filter(ingredientList => id !== ingredientList.id);
    },
    createIngredient(state, action) {
      const { listID, ingredientID } = action.payload;

      const ingredientListToChange = state.find(ingredientList => listID === ingredientList.id);

      const changedIngredientList = {
        ...ingredientListToChange,
        ingredients: ingredientListToChange.ingredients.concat({ id: ingredientID })
      };

      return state.map(ingredientList =>
        ingredientList.id !== listID ? ingredientList : changedIngredientList
      );
    },
    removeIngredient(state, action) {
      const { listID, ingredientID } = action.payload;
      return state.map(ingredientList =>
        ingredientList.id !== listID
          ? ingredientList
          : { ...ingredientList,
            ingredients: ingredientList.ingredients.filter(ingredient => ingredientID !== ingredient.id)
          }
      );
    },
    updateIngredient(state, action) {
      const { listID, ingredientID, name, amount } = action.payload;
            
      const ingredientToChange = state.find(
        ingredientList => listID === ingredientList.id
      ).ingredients.find(
        ingredient => ingredientID === ingredient.id
      );

      const changedIngredient = {
        ...ingredientToChange,
        name,
        amount
      };

      return state.map(ingredientList =>
        ingredientList.id !== listID
          ? ingredientList
          : { ...ingredientList,
            ingredients: ingredientList.ingredients.map(ingredient =>
              ingredientID !== ingredient.id
                ? ingredient
                : changedIngredient
            )
          }
      );
    },
    changePortionAmount(state, action) {
      const { newPortionAmount } = action.payload;
      const prevPortionAmount = !action.payload.prevPortionAmount ? 1 : action.payload.prevPortionAmount;

      return state.map(ingredient => {
        if (!ingredient.amount) return ingredient;

        const newIngredientAmount = ingredient.amount
          .replaceAll(',', '.')
          .split(' ')
          .map(part =>
            !Number(part)
              ? part
              : finnishNumberFormat.format(Number(part) / prevPortionAmount * newPortionAmount)
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

export const {
  createIngredientList,
  removeIngredientList,
  createIngredient,
  removeIngredient,
  updateIngredient,
  changePortionAmount
} = ingredientSlice.actions;
export default ingredientSlice.reducer;