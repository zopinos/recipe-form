import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const TitleInput = ({ style }) => {
  const [title, setTitle] = useState('');

  return (
    <TextInput
      editable
      multiline
      onChangeText={text => setTitle(text)}
      value={title}
      placeholder='Otsikko'
      style={[style, styles.titleInput]}
    />
  );
};

const styles = StyleSheet.create({
  titleInput: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 70,

    fontFamily: 'SourceSerif4-Bold',
    fontSize: theme.fontSizes.heading,
    fontWeight: 'normal',
    textAlignVertical: 'top',

    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 10,
    border: 'none',
  }
});

export default TitleInput;