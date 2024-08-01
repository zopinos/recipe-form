import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Main from './src/components/Main';

import titleReducer from './src/reducers/titleReducer';

const store = configureStore({
  reducer: {
    title: titleReducer,
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