import Ingredient from './Ingredient';
import { EditableHeader2 } from './AutoResizeTextarea';
import ItemRemoveButton from './ItemRemoveButton';

const IngredientList = ({
  ingredientList,
  handleDelete,
  handleUpdate,
  handleIngredientAdd,
  handleIngredientRemove,
  handleIngredientUpdate
}) => {
  const ingredients = ingredientList.ingredients;

  const handleTitleChange = (event) => {
    handleUpdate(event.target.value);
  };

  return (
    <div className='ingredients-list'>
      <ItemRemoveButton handleDelete={handleDelete} />
      <EditableHeader2 replacedValue={ingredientList.title} placeholder={'Ainesosat'} onChange={handleTitleChange} />
      <div className='ingredient-table'>
        {ingredients.map(ingredient => 
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            listID={ingredientList.id}
            handleDelete={() => handleIngredientRemove(ingredientList.id, ingredient.id)}
            handleUpdate={handleIngredientUpdate}
          />
        )}
      </div>
      <button
        className='button button-add-ingredient'
        type='button'
        onClick={() => {
          handleIngredientAdd(ingredientList.id);
        }}
      >
        <svg className='graphics-add-ingredient' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.2">
          <path d="M52.6 0A52.6 52.6 0 0 0 0 52.6a52.6 52.6 0 0 0 52.6 52.6 52.6 52.6 0 0 0 52.6-52.6A52.6 52.6 0 0 0 52.6 0zm2 18.7a5 5 0 0 1 4.8 5.2c-.3 6.4-.4 14.7-.4 23.4 11.2-.5 16.8-.7 22.5-.8a5 5 0 0 1 5 4.9 5 5 0 0 1-4.8 5l-22.7.9c0 10.2.3 20 .4 26.8a5 5 0 0 1-5 5 5 5 0 0 1-5-4.9L49 57.7 25 59a5 5 0 0 1-5.2-4.7 5 5 0 0 1 4.7-5.3L49 47.7c0-8.8 0-17.5.4-24.3a5 5 0 0 1 5.2-4.7z"/>
        </svg>
      </button>
    </div>
  );
};

export default IngredientList;