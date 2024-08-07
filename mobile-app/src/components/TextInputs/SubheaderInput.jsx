import { StyleSheet } from 'react-native';

import AutoResizeTextInput from './AutoResizeTextInput';

import theme from '../../theme';

const SubheaderInput = ({ replacedValue, placeholder, onChange }) => {
  return (
    <AutoResizeTextInput
      style={styles.subheaderInput}
      placeholder={placeholder}
      replacedValue={replacedValue}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  subheaderInput: {
    width: '60%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0,

    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'normal',
    textAlignVertical: 'center',
    textDecorationLine: 'underline',

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  }
});

export default SubheaderInput;