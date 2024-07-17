import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IngredientList from './IngredientList';
import { changeIngredientListTitle, createIngredient, createIngredientList, removeIngredient, removeIngredientList, updateIngredient } from '../reducers/ingredientReducer';

const IngredientListContainer = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const ingredientLists = useSelector(({ ingredientLists }) => ingredientLists);

  return (
    <div className="ingredient-list-container">
      {ingredientLists.map(ingredientList => 
        <IngredientList
          key={ingredientList.id}
          ingredientList={ingredientList}
          handleDelete={() => dispatch(removeIngredientList(ingredientList.id))}
          handleUpdate={(title) => dispatch(changeIngredientListTitle({ id: ingredientList.id, title}))}
          handleIngredientAdd={(listID, ingredientID) => dispatch(createIngredient({ listID, ingredientID }))}
          handleIngredientRemove={(listID, ingredientID) => dispatch(removeIngredient({ listID, ingredientID }))}
          handleIngredientUpdate={(listID, ingredientID, name, amount) => dispatch(updateIngredient({ listID, ingredientID, name, amount }))}
        />
      )}
      <button
        type='button'
        onClick={() => {
          dispatch(createIngredientList(count));
          setCount((prevValue) => prevValue + 1);
        }}
      >
        <span>
          add new list
        </span>
      </button>
    </div>
  );
};

export default IngredientListContainer;