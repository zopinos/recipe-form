import { useDispatch, useSelector } from 'react-redux';
import { EditableHeader1 } from './components/AutoResizeTextarea';
import { changeTitle } from './reducers/titleReducer';
import TargetPortionsSetter from './components/TargetPortionsSetter';
import exportObjectAsJSON from './util/exporting';
import IngredientListContainer from './components/IngredientListContainer';
import TextContentContainer from './components/TextContentContainer';

function App() {
  const title = useSelector(({ title }) => title);
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredients }) => ingredients);
  const textContents = useSelector(({ textContents }) => textContents);

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(changeTitle(event.target.value));
  };

  return (
    <div className="container">
      <EditableHeader1
        placeholder={'Otsikko'}
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
    </div>
  );
}

export default App;
