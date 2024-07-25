import { useDispatch, useSelector } from 'react-redux';
import { EditableHeader1 } from './components/AutoResizeTextarea';
import TargetPortionsSetter from './components/TargetPortionsSetter';
import exportObjectAsJSON from './util/exporting';
import IngredientListContainer from './components/IngredientListContainer';
import TextContentContainer from './components/TextContentContainer';
import { setTitle } from './reducers/titleReducer';
import { setTargetPortionsAmount } from './reducers/targetPortionsReducer';
import { setIngredientLists } from './reducers/ingredientReducer';
import { setTextContent } from './reducers/textContentReducer';
import FileInput from './components/FileInput';

function App() {
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

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  return (
    <div className="container">
      <EditableHeader1
        placeholder={'Otsikko'}
        replacedValue={title}
        onChange={handleTitleChange}
      />
      <TargetPortionsSetter />
      <IngredientListContainer />
      <TextContentContainer />
      <div className='save-load-container'>
        <button className='button button-text' type='button' onClick={() => {exportObjectAsJSON('my-new-cool-recipe.json', { title, portions, ingredients, textContents });}}>
          <span>Tallenna resepti</span>
        </button>
        <FileInput handleFile={handleStateImport} />
      </div>
    </div>
  );
}

export default App;
