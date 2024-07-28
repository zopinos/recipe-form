import { useDispatch, useSelector } from 'react-redux';

import FileInput from './components/FileInput';

import exportObjectAsJSON from './util/exporting';

import { setTitle } from './reducers/titleReducer';
import { setTargetPortionsAmount } from './reducers/targetPortionsReducer';
import { setIngredientLists } from './reducers/ingredientReducer';
import { setTextContent } from './reducers/textContentReducer';
import { useState } from 'react';
import EditView from './components/EditView';
import RecipeView from './components/RecipeView';

function App() {
  const [ recipeView, setRecipeView ] = useState(false);

  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  const dispatch = useDispatch();

  const handleStateImport = (json) => {
    const { title, portions, ingredients, textContents } = json;
    dispatch(setTitle(title));
    dispatch(setTargetPortionsAmount(portions));
    dispatch(setIngredientLists(ingredients));
    dispatch(setTextContent(textContents));
  };

  const handleCheckboxChange = () => {
    setRecipeView(!recipeView);
  };

  return (
    <div className="container">
      {!recipeView && <EditView />}
      {recipeView && <RecipeView />}
      <div className='recipe-view-control'>
        <input type='checkbox' checked={recipeView} onChange={handleCheckboxChange} />
        <span>Katselutila</span>
      </div>
      <div className='save-load-container'>
        <button className='button-text' type='button' onClick={() => {exportObjectAsJSON('my-new-cool-recipe.json', { title, portions, ingredients, textContents });}}>
          <span>Tallenna resepti</span>
        </button>
        <FileInput handleFile={handleStateImport} />
      </div>
    </div>
  );
}

export default App;
