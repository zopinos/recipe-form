import { StyleSheet, View } from 'react-native';
import { RemoveIngredient } from '../Buttons/ButtonGraphics';
import CustomButton from '../Buttons/CustomButton';
import AutoResizeTextInput from '../TextInputs/AutoResizeTextInput';

const Ingredient = ({ ingredient, listID, handleDelete, handleUpdate }) => {
  const handleNameChange = (text) => {
    handleUpdate(listID, ingredient.id, text, ingredient.amount);
  };

  const handleAmountChange = (text) => {
    handleUpdate(listID, ingredient.id, ingredient.name, text);
  };
  
  return (
    <View style={styles.ingredientRow}>
      <AutoResizeTextInput
        ingredientAmountInput
        placeholder={'määrä'}
        value={ingredient.amount}
        onChangeText={handleAmountChange}
        autoCapitalize={'none'}
      />
      <AutoResizeTextInput
        ingredientNameInput
        placeholder={'ainesosa'}
        value={ingredient.name}
        onChangeText={handleNameChange}
        autoCapitalize={'none'}
      />
      <View style={styles.buttonRemove}>
        <CustomButton onPress={handleDelete}>
          <RemoveIngredient />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientRow: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 6,
  },
  buttonRemove: {
    flex: 3,
    alignSelf: 'center'
  }
});

export default Ingredient;