import { useState } from 'react';
import Ingredient from './Ingredient';
import { EditableHeader2 } from './AutoResizeTextarea';

const IngredientList = ({
  ingredientList,
  handleDelete,
  handleIngredientAdd,
  handleIngredientRemove,
  handleIngredientUpdate
}) => {
  const [count, setCount] = useState(1);

  const ingredients = ingredientList.ingredients;

  /* const handleTitleChange = (event) => {
    dispatch();
  }; */

  return (
    <div className='ingredients-list'>
      <EditableHeader2 placeholder={'Ainesosat'} />
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
          handleIngredientAdd(ingredientList.id, count);
          setCount((prevValue) => prevValue + 1);
        }}
      >
        <span className="material-symbols-outlined">
                    add_circle
        </span>
      </button>
      <button type='button' onClick={handleDelete} >
        <span>
          remove list
        </span>
      </button>
    </div>
  );
};

export default IngredientList;