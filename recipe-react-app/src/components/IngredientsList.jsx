import { useState } from 'react'
import Ingredient from "./Ingredient"
import { EditableHeader2 } from "./AutoResizeTextarea"

const initialIngredients = [
    {
        id: 0,
        name: "muna",
        amount: "1",
    }
]

const IngredientsList = () => {
    const [ingredients, setIngredients] = useState(initialIngredients)
    const [count, setCount] = useState(1)

    const addIngredient = () => {
        const newIngredient = {
            id: count
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
            <EditableHeader2 placeholder={"Ingredients Title"} />
            <div className='ingredient-table'>
                {ingredients.map(ing =>
                    <Ingredient
                        key={ing.id}
                        ingredient={ing}
                        remove={removeIngredient}
                    />
                )}
            </div>
            <button className='button button-add-ingredient' type='button' onClick={() => addIngredient()}>
                <span className="material-symbols-outlined">
                    add_circle
                </span>
            </button>
        </div>
    )
}

export default IngredientsList