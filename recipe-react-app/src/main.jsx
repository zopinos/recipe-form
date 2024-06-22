import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';

import ingredientReducer from './reducers/ingredientReducer';
import titleReducer from './reducers/titleReducer';
import targetPortionsReducer from './reducers/targetPortionsReducer';

const store = configureStore({
  reducer: {
    title: titleReducer,
    targetPortions: targetPortionsReducer,
    ingredients: ingredientReducer,
    /* recipeItems: ,
        theme: , */
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);