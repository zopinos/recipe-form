import { TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const AutoResizeTextInput = ({
  placeholder,
  value,
  onChangeText,
  autoCapitalize,
  heading = false,
  subheading = false,
  ingredientAmountInput = false,
  ingredientNameInput = false
}) => {
  const typeStyle = () => {
    return (
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
        )
    );
  };

  return (
    <TextInput
      value={value}
      onChangeText={(text) => onChangeText(text)}
      editable
      multiline
      ref={ref => ref && ref.setNativeProps({ style: [
        heading
          ? styles.headingFont
          : (subheading ? styles.subheadingFont : styles.regularFont),
      ]})}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      autoComplete='off'
      autoCorrect={false}
      cursorColor='black'
      style={[
        styles.inputField,
        typeStyle()
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
  },
  textInput: {
    width: '100%',
    marginTop: 10,

    textAlignVertical: 'center',
  },
  subheadingInput: {
    width: '60%',
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