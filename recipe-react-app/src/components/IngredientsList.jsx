import { useState } from 'react'
import Ingredient from "./Ingredient"

const initialIngredients = [
    {
        id: 0,
        name: "name",
        amount: "amount",
        unit: "_"
    }
]

const IngredientsList = () => {
    const [ingredients, setIngredients] = useState(initialIngredients)
    const [count, setCount] = useState(1)

    const addIngredient = () => {
        const newIngredient = {
            id: count,
            name: "null",
            amount: "null",
            unit: "_"
        }

        const updatedIngredients = ingredients.concat(newIngredient)
        
        setIngredients(updatedIngredients)
        setCount(count + 1)
    }

    const removeIngredient = (id) => {
        setIngredients(
            ingredients.filter(ingredient => id !== ingredient.id)
        )
    }

    return (
        <div>
            <table id="editableTable">
                <thead>
                    <tr>
                        <th>amount</th>
                        <th>unit</th>
                        <th>ingredient</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(ing =>
                    <Ingredient
                        key={ing.id}
                        ingredient={ing}
                        remove={removeIngredient}
                    />
                    )}
                </tbody>
            </table>
            <button onClick={() => addIngredient()}>Add</button>
        </div>
    )
}

export default IngredientsList