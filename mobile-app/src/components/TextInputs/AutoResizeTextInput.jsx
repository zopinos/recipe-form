import { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const AutoResizeTextInput = ({ style = styles.textInput, placeholder, replacedValue, onChange }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(replacedValue);
  }, [replacedValue]);

  const handleChange = (text) => {
    if (onChange) {
      onChange(text);
    }
    setValue(text);
  };

  return (
    <TextInput
      editable
      multiline
      onChangeText={text => handleChange(text)}
      value={value}
      placeholder={placeholder}
      style={[style]}
      maxLength={9999}
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

export default AutoResizeTextInput;