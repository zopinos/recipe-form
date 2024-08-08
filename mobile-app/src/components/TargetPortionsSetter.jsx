import { useDispatch, useSelector } from 'react-redux';
import { setTargetPortionsAmount } from '../reducers/targetPortionsReducer';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import CustomButton from './Buttons/CustomButton';
import { AddIngredient, RemoveIngredient } from './Buttons/ButtonGraphics';
import theme from '../theme';

const MIN = 1;
const MAX = 2;

const TargetPortionsSetter = () => {
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const dispatch = useDispatch();

  const show = targetPortions.included;

  const toggleVisibility = () => {
    dispatch(setTargetPortionsAmount({
      portions: targetPortions.portions,
      included: !targetPortions.included
    }));
  };

  const handleInputUpdate = (text) => {
    if (!Number(text) && text !== '') return;
    const newValue = text === ''
      ? ''
      : Math.max(Number(MIN), Number(text));
    dispatch(setTargetPortionsAmount({
      included: targetPortions.included,
      portions: newValue
    }));
  };

  const hidden = () =>
    <View style={styles.hidden}>
      <CustomButton onPress={() => toggleVisibility()}>
        <AddIngredient />
      </CustomButton>
    </View>;

  const shown = () =>
    <View style={styles.shown}>
      <TextInput
        value={targetPortions.portions.toString()}
        style={styles.input}
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        cursorColor={'black'}
        enterKeyHint='enter'
        inputMode='numeric'
        maxLength={MAX}
        onChangeText={(text) => handleInputUpdate(text)}
        textAlign='center'
      />
      <Text style={styles.portionsText}>annosta</Text>
      <CustomButton onPress={() => toggleVisibility()}>
        <RemoveIngredient />
      </CustomButton>
    </View>;

  return (
    <View>
      {show ? shown() : hidden()}
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 15,
    alignItems: 'center'
  },
  shown: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 15,
    alignItems: 'center'
  },
  portionsText: {
    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    textAlignVertical: 'center',
  },
  input: {
    width: 60,
    padding: 2,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField,
    border: 'none',
    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.body,
    fontWeight: 'normal',
    textAlignVertical: 'center'
  }
});

export default TargetPortionsSetter;