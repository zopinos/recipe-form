import { useDispatch, useSelector } from 'react-redux';
import TextContent from './TextContent';
import { createTextContent, removeTextContent, updateTextContent } from '../../reducers/textContentReducer';
import { View } from 'react-native';
import { AddText } from '../Buttons/ButtonGraphics';
import CustomButton from '../Buttons/CustomButton';

const TextContentContainer = () => {
  const dispatch = useDispatch();

  const textContents = useSelector(({ textContents }) => textContents);

  return (
    <View>
      {textContents.map(textContent => 
        <TextContent
          key={textContent.id}
          textContent={textContent}
          handleDelete={() => dispatch(removeTextContent(textContent.id))}
          handleUpdate={(payload) => dispatch(updateTextContent(payload))}
        />
      )}
      <View style={{ alignItems: 'center', margin: 30}}>
        <CustomButton onPress={() => {
          dispatch(createTextContent());
        }}>
          <AddText />
        </CustomButton>
      </View>
    </View>
  );
};

export default TextContentContainer;
