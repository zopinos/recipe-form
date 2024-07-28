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
    setIngredientLists(state, action) {
      return action.payload;
    },
    createIngredientList(state) {
      return state
        .concat({
          ingredients: [{ id: 0 }]
        })
        .map((list, idx) => {
          return {
            ...list, id: idx
          };});
    },
    removeIngredientList(state, action) {
      const id = action.payload;
      return state.filter(ingredientList => id !== ingredientList.id);
    },
    changeIngredientListTitle(state, action) {
      const { id, title } = action.payload;

      const ingredientListToChange = state.find(ingredientList => id === ingredientList.id);

      const changedIngredientList = {
        ...ingredientListToChange,
        title
      };

      return state.map(ingredientList => ingredientList.id !== id ? ingredientList : changedIngredientList);
    },
    createIngredient(state, action) {
      const { listID } = action.payload;

      const ingredientListToChange = state.find(ingredientList => listID === ingredientList.id);

      const changedIngredientList = {
        ...ingredientListToChange,
        ingredients: ingredientListToChange.ingredients
          .concat({})
          .map((ingredient, idx) => {
            return {
              ...ingredient, id: idx
            };
          })
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
  setIngredientLists,
  createIngredientList,
  removeIngredientList,
  changeIngredientListTitle,
  createIngredient,
  removeIngredient,
  updateIngredient,
  changePortionAmount
} = ingredientSlice.actions;
export default ingredientSlice.reducer;