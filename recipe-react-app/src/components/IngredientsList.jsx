import { useState } from 'react'
import Ingredient from "./Ingredient"

const initialIngredients = [
    {
        name: "name",
        amount: "amount",
        unit: "__"
    }
]

const IngredientsList = () => {
    const [ingredients, setIngredients] = useState(initialIngredients)

    const addIngredient = () => {
        const newIngredient = {
            name: "null",
            amount: "null",
            unit: "__"
        }
        const updatedIngredients = ingredients.concat(newIngredient)
        
        setIngredients(updatedIngredients)
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
                        key={ing.name}
                        name={ing.name}
                        amount={ing.amount}
                        unit={ing.unit}
                    />
                    )}
                </tbody>
            </table>
            <button onClick={() => addIngredient()}>Add</button>
        </div>
    )
}

export default IngredientsList