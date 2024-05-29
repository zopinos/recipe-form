const Ingredient = ({amount, name}) => {
    return (
        <tr>
            <td contentEditable="true">{amount}</td>
            <td contentEditable="true">{name}</td>
            <td>
                <button className="deleteRow">Delete</button>
            </td>
        </tr>
    )
}

export default Ingredient