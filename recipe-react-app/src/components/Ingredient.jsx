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
        <svg className='graphics-remove-ingredient' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.2">
          <path d="M52.6 0a52.6 52.6 0 1 0 0 105.2A52.6 52.6 0 0 0 52.6 0zm4.2 47.9 20.8.1a5 5 0 0 1 5 5 5 5 0 0 1-5.1 5s-39.8-.4-50.1.5a5 5 0 0 1-5.4-4.6 5 5 0 0 1 4.5-5.4c6.3-.5 19-.6 30.3-.6z"/>
        </svg>
      </button>
    </IngredientRow>
  );
};

export default Ingredient;