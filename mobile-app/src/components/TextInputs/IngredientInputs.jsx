import { StyleSheet } from 'react-native';
import AutoResizeTextInput from './AutoResizeTextInput';
import theme from '../../theme';

export const IngredientAmountInput = ({ replacedValue, placeholder, onChange }) => {
  return (
    <AutoResizeTextInput
      style={styles.amount}
      replacedValue={replacedValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export const IngredientNameInput = ({ replacedValue, placeholder, onChange }) => {
  return (
    <AutoResizeTextInput
      style={styles.name}
      replacedValue={replacedValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  amount: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    textAlignVertical: 'top',
    textAlign: 'right',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  },
  name: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    textAlignVertical: 'top',
    textAlign: 'left',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  }
});