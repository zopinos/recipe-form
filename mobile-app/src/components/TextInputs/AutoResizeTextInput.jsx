import { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const AutoResizeTextInput = ({
  placeholder,
  replacedValue,
  onChange,
  autoCapitalize,
  heading = false,
  subheading = false,
  ingredientAmountInput = false,
  ingredientNameInput = false
}) => {
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
      style={[
        styles.inputField,
        heading
          ? styles.headingFont
          : (subheading ? styles.subheadingFont : styles.regularFont),
        ingredientAmountInput
          ? styles.ingredientAmountInput
          : (
            ingredientNameInput
              ? styles.ingredientNameInput
              : (
                subheading
                  ? styles.subheadingInput
                  : styles.textInput
              )
          ),
      ]}
      maxLength={9999}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: 14,
    paddingHorizontal: 20,

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
    includeFontPadding: false,
  },
  textInput: {
    width: '100%',
    marginTop: 10,

    textAlignVertical: 'center',
  },
  subheadingInput: {
    width: '60%',
    textDecorationLine: 'underline',
    textAlignVertical: 'center',
  },
  regularFont: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontStyle: theme.fontStyles.normal,
  },
  headingFont: {
    fontFamily: theme.fonts.mainSemiBold,
    fontSize: theme.fontSizes.heading,
    fontStyle: theme.fontStyles.normal,
  },
  subheadingFont: {
    fontFamily: theme.fonts.mainSemiBold,
    fontSize: theme.fontSizes.subheading,
    fontStyle: theme.fontStyles.normal,
  },
  ingredientNameInput: {
    flex: 14,

    textAlignVertical: 'top',
    textAlign: 'left',
  },
  ingredientAmountInput: {
    flex: 6,

    textAlignVertical: 'top',
    textAlign: 'right',
  }
});

export default AutoResizeTextInput;