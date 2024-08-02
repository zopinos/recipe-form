import { View } from 'react-native';

import TitleInput from './TextInputs/TitleInput.jsx';
import TextContentContainer from './TextContent/TextContentContainer.jsx';

const EditView = () => {
  return (
    <View>
      <TitleInput />
      <TextContentContainer />
    </View>
  );
};

export default EditView;