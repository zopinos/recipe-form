import { View } from 'react-native';

import TitleInput from './TextInputs/TitleInput.jsx';
import TextContentContainer from './TextContent/TextContentContainer.jsx';
import IngredientListContainer from './Ingredients/IngredientListContainer.jsx';
import TargetPortionsSetter from './TargetPortionsSetter.jsx';

const EditView = () => {
  return (
    <View>
      <TitleInput />
      <TargetPortionsSetter />
      <IngredientListContainer />
      <TextContentContainer />
    </View>
  );
};

export default EditView;