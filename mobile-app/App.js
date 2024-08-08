import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

import titleReducer from './src/reducers/titleReducer';
import targetPortionsReducer from './src/reducers/targetPortionsReducer';
import ingredientReducer from './src/reducers/ingredientReducer';
import textContentReducer from './src/reducers/textContentReducer';

const store = configureStore({
  reducer: {
    title: titleReducer,
    targetPortions: targetPortionsReducer,
    ingredientLists: ingredientReducer,
    textContents: textContentReducer,
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </Provider>
  );
};

export default App;