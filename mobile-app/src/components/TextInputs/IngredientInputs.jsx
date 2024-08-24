import { StyleSheet } from 'react-native';
import AutoResizeTextInput from './AutoResizeTextInput';
import theme from '../../theme';

export const IngredientAmountInput = ({ replacedValue, placeholder, onChange }) => {
  return (
    <AutoResizeTextInput
      style={styles.amount}
      autoCapitalize={'none'}
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
      autoCapitalize={'none'}
      replacedValue={replacedValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  amount: {
    width: '30%',
    paddingVertical: 10,
    paddingHorizontal: 20,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlignVertical: 'top',
    textAlign: 'right',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  },
  name: {
    width: '57%',
    paddingVertical: 10,
    paddingHorizontal: 20,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlignVertical: 'top',
    textAlign: 'left',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  }
});