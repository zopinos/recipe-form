import { Fragment } from 'react';
import { useSelector } from 'react-redux';

const RecipeView = () => {
  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  return (
    <div className='recipe-view'>
      <h1>{title}</h1>
      {portions.included && <div className='portions'>{portions.portions} annosta</div>}
      {ingredients.map(ingredientList => 
        <div key={ingredientList.id}>
          <table>
            <caption>
              <h2>{ingredientList.title}</h2>
            </caption>
            <tbody>
              {ingredientList.ingredients.map(ingredient =>
                <tr key={ingredient.id}>
                  <td className='table-ingredient-amount'>{ingredient.amount}</td>
                  <td className='table-ingredient-name'>{ingredient.name}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {textContents.map(textContent =>
        <div key={textContent.id}>
          <h2>{textContent.title}</h2>
          <p>
            {textContent.text && textContent.text.split('\n').map((text, index) => (
              <Fragment key={index}>
                {text}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeView;