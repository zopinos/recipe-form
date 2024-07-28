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
        <img className='graphics-add-ingredient' src='/src/assets/add-ingredient.svg' draggable='false' />
      </button>
    </div>
  );
};

export default IngredientList;