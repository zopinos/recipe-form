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
        <div className='ingredients-list'>
            <table id="editable-table">
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
            <button className='button button-add-ingredient' type='button' onClick={() => addIngredient()}>
                <span className="material-symbols-outlined">
                    add_circle
                </span>
            </button>
        </div>
    )
}

export default IngredientsList