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
import Togglable from './components/Togglable';

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

  const handlePortionsVisibilityChange = (included) => {
    dispatch(setTargetPortionsAmount({
      portions: portions.portions,
      included
    }));
  };

  return (
    <div className="container">
      <EditableHeader1
        placeholder={'Otsikko'}
        replacedValue={title}
        onChange={handleTitleChange}
      />
      <Togglable
        visible={portions.included}
        handleChange={handlePortionsVisibilityChange}
        toggleOnLabel='Lisää annosmäärä'
        toggleOffLabel='Poista annosmäärä'
      >
        <TargetPortionsSetter />
      </Togglable>
      <IngredientListContainer />
      <TextContentContainer />
      <button type='button' onClick={() => {exportObjectAsJSON('my-new-cool-recipe.json', { title, portions, ingredients, textContents });}}>
        <span>
          export as json
        </span>
      </button>
      <FileInput handleFile={handleStateImport} />
    </div>
  );
}

export default App;
