import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ingredient from "./Ingredient"
import { EditableHeader2 } from "./AutoResizeTextarea"
import { createIngredient, removeIngredient, updateIngredient } from '../reducers/ingredientReducer'

const IngredientsList = () => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const ingredients = useSelector(({ ingredients }) => ingredients)

    return (
        <div className='ingredients-list'>
            <EditableHeader2 placeholder={"Ingredients Title"} />
            <div className='ingredient-table'>
                {ingredients.map(ingredient =>
                    <Ingredient
                        key={ingredient.id}
                        ingredient={ingredient}
                        handleDelete={() => dispatch(removeIngredient(ingredient.id))}
                        handleUpdate={(payload) => dispatch(updateIngredient(payload))}
                    />
                )}
            </div>
            <button
                className='button button-add-ingredient'
                type='button'
                onClick={() => {
                    dispatch(createIngredient(count))
                    setCount(count + 1)
                }}
            >
                <span className="material-symbols-outlined">
                    add_circle
                </span>
            </button>
        </div>
    )
}

export default IngredientsList