import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 0,
        name: "muna",
        amount: "1",
    }
]

const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        createIngredient(state, action) {
            const nextID = action.payload
            state.push({
                id: nextID
            })
        },
        removeIngredient(state, action) {
            const id = action.payload
            return state.filter(ingredient => id !== ingredient.id)
        }
    }
})

export const { createIngredient, removeIngredient } = ingredientSlice.actions
export default ingredientSlice.reducer