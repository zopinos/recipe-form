const Ingredient = ({ amount, unit, name }) => {
    return (
        <tr>
            <td contentEditable="true">{amount}</td>
            <td>
                <select name="test" defaultValue={unit}>
                    <option value="__">__</option>
                    <option value="dl">dl</option>
                    <option value="oz">oz</option>
                </select>
            </td>
            <td contentEditable="true">{name}</td>
            <td>
                <button className="deleteRow">Delete</button>
            </td>
        </tr>
    )
}

export default Ingredient