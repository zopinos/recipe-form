//import { useState } from 'react'
import Ingredient from "./Ingredient"

const IngredientsList = () => {
    return (
        <div>
            <table id="editableTable">
                <thead>
                    <tr>
                        <th>amount</th>
                        <th>ingredient</th>
                    </tr>
                </thead>
                <tbody>
                    <Ingredient name={"name"} amount={"amount"}/>
                </tbody>
            </table>
            <button>Add</button>
        </div>
    )
}

export default IngredientsList