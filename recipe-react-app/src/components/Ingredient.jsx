import styled from 'styled-components'
import { IngredientAmountText, IngredientText } from "./AutoResizeTextarea"

const IngredientRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
`

const Ingredient = ({ ingredient, remove }) => {
    return (
        <IngredientRow>
            <IngredientAmountText defaultValue={ingredient.amount} placeholder={"amount"} />
            <IngredientText defaultValue={ingredient.name} placeholder={"name"} />
            <button className="button button-delete" type="button" onClick={() => remove(ingredient.id)}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
        </IngredientRow>
    )
}

export default Ingredient