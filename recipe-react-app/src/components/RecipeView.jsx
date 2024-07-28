import { useSelector } from 'react-redux';

const RecipeView = () => {
  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  return (
    <div className='recipe-view'>
      <h1>{title}</h1>
      {portions.included && <span>{portions.portions} annosta</span>}
      {ingredients.map(ingredientList => 
        <div key={ingredientList.id}>
          <h2>{ingredientList.title}</h2>
          {ingredientList.ingredients.map(ingredient =>
            <span key={ingredient.id}>{ingredient.amount} {ingredient.name}</span>
          )}
        </div>
      )}
      {textContents.map(textContent =>
        <div key={textContent.id}>
          <h2>{textContent.title}</h2>
          <p>{textContent.text}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeView;