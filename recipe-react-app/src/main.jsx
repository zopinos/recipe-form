import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';

import ingredientReducer from './reducers/ingredientReducer';
import titlesReducer from './reducers/titlesReducer';
import targetPortionsReducer from './reducers/targetPortionsReducer';
import instructionsReducer from './reducers/instructionsReducer';

const store = configureStore({
  reducer: {
    titles: titlesReducer,
    targetPortions: targetPortionsReducer,
    ingredients: ingredientReducer,
    instructions: instructionsReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);