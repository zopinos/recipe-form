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
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  const handleStateImport = (json) => {
    const { title, targetPortions, ingredients, textContents } = json;
    dispatch(setTitle(title));
    dispatch(setTargetPortionsAmount(targetPortions));
    dispatch(setIngredientLists(ingredients));
    dispatch(setTextContent(textContents));
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
      <button type='button' onClick={() => {exportObjectAsJSON('my-new-cool-recipe.json', { title, targetPortions, ingredients, textContents });}}>
        <span>
          export as json
        </span>
      </button>
      <FileInput handleFile={handleStateImport} />
    </div>
  );
}

export default App;
