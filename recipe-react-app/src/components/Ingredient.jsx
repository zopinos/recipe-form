import styled from 'styled-components';
import { IngredientAmountText, IngredientText } from './AutoResizeTextarea';

const IngredientRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
`;

const Ingredient = ({ ingredient, handleDelete, handleUpdate }) => {
  const handleNameChange = (event) => {
    handleUpdate({...ingredient, name: event.target.value});
  };

  const handleAmountChange = (event) => {
    handleUpdate({...ingredient, amount: event.target.value});
  };

  return (
    <IngredientRow>
      <IngredientAmountText defaultValue={ingredient.amount} placeholder={'amount'} onChange={handleAmountChange} />
      <IngredientText defaultValue={ingredient.name} placeholder={'name'} onChange={handleNameChange} />
      <button className="button button-delete" type="button" onClick={handleDelete}>
        <span className="material-symbols-outlined">
                    delete
        </span>
      </button>
    </IngredientRow>
  );
};

export default Ingredient;