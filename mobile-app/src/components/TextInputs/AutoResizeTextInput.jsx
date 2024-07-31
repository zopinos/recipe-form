import { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const TitleInput = ({ style, placeholder }) => {
  const [text, setText] = useState('');

  return (
    <TextInput
      editable
      multiline
      onChangeText={text => setText(text)}
      value={text}
      placeholder={placeholder}
      style={[style, styles.textInput]}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 70,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    textAlignVertical: 'top',

    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 10,
    border: 'none',
  },
});

export default TitleInput;