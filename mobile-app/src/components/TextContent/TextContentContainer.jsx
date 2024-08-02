import { useDispatch, useSelector } from 'react-redux';
import TextContent from './TextContent';
import { createTextContent, removeTextContent, updateTextContent } from '../../reducers/textContentReducer';
import { View, Pressable } from 'react-native';
import { AddText } from '../ButtonGraphics';

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
        <Pressable onPress={() => {
          dispatch(createTextContent());
        }}>
          <AddText />
        </Pressable>
      </View>
    </View>
  );
};

export default TextContentContainer;
