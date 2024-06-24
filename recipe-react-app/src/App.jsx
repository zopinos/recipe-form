import { useDispatch, useSelector } from 'react-redux';
import { EditableHeader1 } from './components/AutoResizeTextarea';
import IngredientsList from './components/IngredientsList';
import TextContent from './components/TextContent';
import { changeTitles } from './reducers/titlesReducer';
import TargetPortionsSetter from './components/TargetPortionsSetter';
import exportObjectAsJSON from './util/exporting';

function App() {
  const titles = useSelector(({ titles }) => titles);
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredients }) => ingredients);
  const instructions = useSelector(({ instructions }) =>  instructions);

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(changeTitles({ recipeTitle: event.target.value }));
  };

  return (
    <div className="container">
      <EditableHeader1
        placeholder={'Otsikko'}
        onChange={handleTitleChange}
      />
      <TargetPortionsSetter />
      <IngredientsList />
      <TextContent />
      <button type='button' onClick={() => {exportObjectAsJSON('my-new-cool-recipe.json', { titles, targetPortions, ingredients, instructions });}}>
        <span>
          export as json
        </span>
      </button>
    </div>
  );
}

export default App;
