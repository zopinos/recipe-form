import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';

import AutoResizeTextInput from './AutoResizeTextInput';

import { setTitle } from '../../reducers/titleReducer';

import theme from '../../theme';

const TitleInput = () => {
  const title = useSelector(({ title }) => title);

  const dispatch = useDispatch();

  const handleTitleChange = (text) => {
    dispatch(setTitle(text));
  };

  return (
    <AutoResizeTextInput
      style={styles.titleInput}
      placeholder={'Otsikko'}
      replacedValue={title}
      onChange={handleTitleChange}
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

    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
  }
});

export default TitleInput;