import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IngredientList from './IngredientList';

const IngredientListContainer = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const ingredients = useSelector(({ ingredients }) => ingredients);

  return (
    <div className="text-content-container">
      {ingredients.map(ingredientList => 
        <IngredientList
          key={ingredientList.id}
          textContent={ingredientList}
        />
      )}
      <button
        type='button'
      >
        <span>
          add new list
        </span>
      </button>
    </div>
  );
};

export default IngredientListContainer;
