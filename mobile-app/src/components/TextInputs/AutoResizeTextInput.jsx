import { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const AutoResizeTextInput = ({ style = styles.textInput, placeholder, replacedValue, onChange, autoCapitalize }) => {
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
      autoCapitalize={autoCapitalize}
      autoComplete='off'
      autoCorrect={false}
      cursorColor='black'
      onChangeText={(text) => handleChange(text)}
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
    marginTop: 10,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlignVertical: 'center',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  },
});

export default AutoResizeTextInput;