import styled from 'styled-components'
import { IngredientAmountText, IngredientText } from "./AutoResizeTextarea"

const IngredientRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
`

const Ingredient = ({ ingredient, handleDelete }) => {
    return (
        <IngredientRow>
            <IngredientAmountText defaultValue={ingredient.amount} placeholder={"amount"} />
            <IngredientText defaultValue={ingredient.name} placeholder={"name"} />
            <button className="button button-delete" type="button" onClick={handleDelete}>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </IngredientRow>
    )
}

export default Ingredient