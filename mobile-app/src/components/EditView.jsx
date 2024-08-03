import { View } from 'react-native';

import TitleInput from './TextInputs/TitleInput.jsx';
import TextContentContainer from './TextContent/TextContentContainer.jsx';
import IngredientListContainer from './Ingredients/IngredientListContainer.jsx';

const EditView = () => {
  return (
    <View>
      <TitleInput />
      <IngredientListContainer />
      <TextContentContainer />
    </View>
  );
};

export default EditView;