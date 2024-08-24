import AutoResizeTextInput from '../TextInputs/AutoResizeTextInput';
import ItemRemoveButton from '../Buttons/ItemRemoveButton';
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
      <AutoResizeTextInput
        subheading
        placeholder={'Ohje'}
        replacedValue={textContent.title}
        onChange={handleTitleChange}
      />
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
