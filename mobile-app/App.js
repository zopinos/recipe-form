import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Main from './src/components/Main';

import titleReducer from './src/reducers/titleReducer';
import ingredientReducer from './src/reducers/ingredientReducer';
import textContentReducer from './src/reducers/textContentReducer';

const store = configureStore({
  reducer: {
    title: titleReducer,
    ingredientLists: ingredientReducer,
    textContents: textContentReducer,
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;