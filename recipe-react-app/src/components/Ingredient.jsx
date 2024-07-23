import styled from 'styled-components';
import { IngredientAmountText, IngredientText } from './AutoResizeTextarea';

const IngredientRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
`;

const Ingredient = ({ ingredient, listID, handleDelete, handleUpdate }) => {
  const handleNameChange = (event) => {
    handleUpdate(listID, ingredient.id, event.target.value, ingredient.amount);
  };

  const handleAmountChange = (event) => {
    handleUpdate(listID, ingredient.id, ingredient.name, event.target.value);
  };
  
  return (
    <IngredientRow>
      <IngredientAmountText replacedValue={ingredient.amount} placeholder={'määrä'} onChange={handleAmountChange} />
      <IngredientText replacedValue={ingredient.name} placeholder={'nimi'} onChange={handleNameChange} />
      <button className="button button-delete" type="button" onClick={handleDelete}>
        <img className='graphics-remove-ingredient' src='/src/assets/remove-ingredient.svg' />
      </button>
    </IngredientRow>
  );
};

export default Ingredient;