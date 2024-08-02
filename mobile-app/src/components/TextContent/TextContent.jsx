import AutoResizeTextInput from '../TextInputs/AutoResizeTextInput';
import SubheaderInput from '../TextInputs/SubheaderInput';
import ItemRemoveButton from '../ItemRemoveButton';
import { View, StyleSheet } from 'react-native';

const TextContent = ({textContent, handleDelete, handleUpdate }) => {
  const handleTitleChange = (text) => {
    handleUpdate({...textContent, title: text});
  };

  const handleTextChange = (text) => {
    handleUpdate({...textContent, text});
  };

  return (
    <View style={styles.textContent}>
      <ItemRemoveButton handleDelete={handleDelete} />
      <SubheaderInput replacedValue={textContent.title} placeholder={'Ohje'} onChange={handleTitleChange} />
      <AutoResizeTextInput replacedValue={textContent.text} placeholder={'Ohjeen teksti'} onChange={handleTextChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    marginTop: 40,
  }
});

export default TextContent;
