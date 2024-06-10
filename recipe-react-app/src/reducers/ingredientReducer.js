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
        },
        updateIngredient(state, action) {
            const id = action.payload.id
            const name = action.payload.name
            const amount = action.payload.amount
            
            const ingredientToChange = state.find(ingredient => id === ingredient.id)

            const changedIngredient = {
                ...ingredientToChange,
                name,
                amount
            }

            return state.map(ingredient =>
                ingredient.id !== id ? ingredient : changedIngredient
            )
        }
    }
})

export const { createIngredient, removeIngredient, updateIngredient } = ingredientSlice.actions
export default ingredientSlice.reducer