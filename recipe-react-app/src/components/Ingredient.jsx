const Ingredient = ({ ingredient, remove }) => {
    return (
        <tr>
            <td>
                <input type="number" size={4} defaultValue={ingredient.amount}/>
            </td>
            <td>
                <select name="test" defaultValue={ingredient.unit}>
                    <option value="_">_</option>
                    <option value="dl">dl</option>
                    <option value="oz">oz</option>
                </select>
            </td>
            <td>
                <input type="text" defaultValue={ingredient.name} />
            </td>
            <td>
                <button className="button button-delete" type="button" onClick={() => remove(ingredient.id)}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </td>
        </tr>
    )
}

export default Ingredient