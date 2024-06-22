import { useDispatch, useSelector } from 'react-redux';
import { EditableHeader1 } from './components/AutoResizeTextarea';
import IngredientsList from './components/IngredientsList';
import TextContent from './components/TextContent';
import { changeTitle } from './reducers/titleReducer';
import TargetPortionsSetter from './components/TargetPortionsSetter';

function App() {
  const title = useSelector(({ title }) => title);
  const ingredients = useSelector(({ ingredients }) => ingredients);

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
      <IngredientsList />
      <TextContent />
      <button className="button button-add-item" type="button">
        <span className="material-symbols-outlined">
          add_circle
        </span>
      </button>
    </div>
  );
}

export default App;
