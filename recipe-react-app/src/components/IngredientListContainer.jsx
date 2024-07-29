import { useDispatch, useSelector } from 'react-redux';
import IngredientList from './IngredientList';
import { changeIngredientListTitle, createIngredient, createIngredientList, removeIngredient, removeIngredientList, updateIngredient } from '../reducers/ingredientReducer';

const IngredientListContainer = () => {
  const dispatch = useDispatch();

  const ingredientLists = useSelector(({ ingredientLists }) => ingredientLists);

  return (
    <div className="ingredient-list-container">
      {ingredientLists.map(ingredientList => 
        <IngredientList
          key={ingredientList.id}
          ingredientList={ingredientList}
          handleDelete={() => dispatch(removeIngredientList(ingredientList.id))}
          handleUpdate={(title) => dispatch(changeIngredientListTitle({ id: ingredientList.id, title}))}
          handleIngredientAdd={(listID) => dispatch(createIngredient({ listID }))}
          handleIngredientRemove={(listID, ingredientID) => dispatch(removeIngredient({ listID, ingredientID }))}
          handleIngredientUpdate={(listID, ingredientID, name, amount) => dispatch(updateIngredient({ listID, ingredientID, name, amount }))}
        />
      )}
      <div className='container-add-item'>
        <button
          className='button button-add-list'
          type='button'
          onClick={() => {
            dispatch(createIngredientList());
          }}
        >
          <svg className='graphics-add-list' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.19">
            <path d="M52.6 0a52.6 52.6 0 1 0 0 105.2A52.6 52.6 0 0 0 52.6 0zm-.5 23.9c8.07-.02 16.33.12 25.01.68a2.25 2.25 0 0 1 2.1 2.27c-.12 11.97-.17 20.1-.17 24.95 0 2.32.02 3.8.05 4.64a2.25 2.25 0 0 1 .12.94c-.02.17-.02.27-.1.57 0 .08-.03.17-.1.33a2.15 2.15 0 0 1-.35.62c-.08.1-.37.37-.37.37l-.74.37-1.06.06-.86-.35s-.35-.3-.45-.41c-.41-.5-.4-.68-.44-.82-.17-.57-.1-.56-.12-.73l-.03-.6c-.03-.93-.05-2.55-.05-4.99 0-4.45.06-12.48.16-22.79-15.45-.87-29.75-.54-44.23-.31-.2 36.67-.04 41.98.13 46.63 5.73-.29 11.33-.55 15.6-.6 2.46-.03 4.57 0 6.24.11 1.68.12 2.72.03 4.15.92a2.25 2.25 0 0 1 .72 3.1 2.25 2.25 0 0 1-3.1.72c.5.31-.61-.15-2.08-.25-1.46-.1-3.48-.13-5.87-.1-4.78.05-11.05.34-17.74.69a2.25 2.25 0 0 1-2.37-2.18c-.18-5.78-.43-6.74-.17-51.28a2.25 2.25 0 0 1 2.22-2.24c7.93-.1 15.82-.3 23.9-.32zM41.51 36.84c.94 0 1.88 0 2.85.03a2.25 2.25 0 0 1 2.2 2.3 2.25 2.25 0 0 1-2.3 2.2c-2.95-.06-5.8 0-8.63.1a2.25 2.25 0 0 1-2.33-2.17 2.25 2.25 0 0 1 2.17-2.33c1.97-.07 3.98-.12 6.04-.13zm10.07.12c5.75.29 10.98.06 17.06.05a2.25 2.25 0 0 1 2.25 2.25 2.25 2.25 0 0 1-2.25 2.25c-5.96 0-11.28.25-17.28-.05a2.25 2.25 0 0 1-2.14-2.36 2.25 2.25 0 0 1 2.36-2.14zm-7.31 10.68a2.25 2.25 0 0 1 2.32 2.18 2.25 2.25 0 0 1-2.19 2.32c-3.04.09-6.08.17-8.88.1a2.25 2.25 0 0 1-2.2-2.3 2.25 2.25 0 0 1 2.31-2.2c2.63.07 5.6-.01 8.64-.1zm14.7 0c2.25 0 5.2.03 9.88.15a2.25 2.25 0 0 1 2.2 2.3 2.25 2.25 0 0 1-2.32 2.2c-10.63-.27-12.1-.1-17.22-.06A2.25 2.25 0 0 1 49.25 50a2.25 2.25 0 0 1 2.24-2.27c2.82-.02 4.58-.08 7.48-.09zm16.24 8.38-.06.05a2.17 2.17 0 0 0-.34.6c-.05.12-.06.18-.07.22a2.25 2.25 0 0 1 .47-.87zm-30.42 2.6a2.25 2.25 0 0 1 2.3 2.2 2.25 2.25 0 0 1-2.21 2.29c-1.68.03-5.83.13-8.78.17a2.25 2.25 0 0 1-2.28-2.23 2.25 2.25 0 0 1 2.22-2.27c2.9-.04 7.04-.13 8.75-.17zm7.15.09c7.14.03 11.72.07 16.87.1a2.25 2.25 0 0 1 2.23 2.27 2.25 2.25 0 0 1-2.27 2.24c-5.15-.04-9.72-.08-16.85-.12a2.25 2.25 0 0 1-2.24-2.26 2.25 2.25 0 0 1 2.26-2.23zm24.62 7.07a2.25 2.25 0 0 1 2.3 2.2c.06 3 .1 5.3.11 7.14 2.59.01 4.65-.02 5.91-.2a2.25 2.25 0 0 1 .32-.03 2.25 2.25 0 0 1 2.23 1.94 2.25 2.25 0 0 1-1.92 2.54c-1.72.25-3.94.3-6.52.3-.04 4-.28 2.13-.3 6.43a2.25 2.25 0 0 1-2.27 2.23 2.25 2.25 0 0 1-2.24-2.26c.03-4.48.27-2.51.3-6.46-2.21-.03-4.55-.06-7.15-.04a2.25 2.25 0 0 1-2.27-2.24 2.25 2.25 0 0 1 2.24-2.26c2.6-.02 4.95 0 7.17.02-.02-1.82-.05-4.07-.11-7.02a2.25 2.25 0 0 1 2.2-2.3z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IngredientListContainer;
