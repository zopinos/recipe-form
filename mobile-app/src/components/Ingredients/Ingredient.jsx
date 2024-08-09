import { StyleSheet, View } from 'react-native';
import { IngredientAmountInput, IngredientNameInput } from '../TextInputs/IngredientInputs';
import { RemoveIngredient } from '../Buttons/ButtonGraphics';
import CustomButton from '../Buttons/CustomButton';

const Ingredient = ({ ingredient, listID, handleDelete, handleUpdate }) => {
  const handleNameChange = (text) => {
    handleUpdate(listID, ingredient.id, text, ingredient.amount);
  };

  const handleAmountChange = (text) => {
    handleUpdate(listID, ingredient.id, ingredient.name, text);
  };
  
  return (
    <View style={styles.ingredientRow}>
      <IngredientAmountInput replacedValue={ingredient.amount} placeholder={'määrä'} onChange={handleAmountChange} />
      <IngredientNameInput replacedValue={ingredient.name} placeholder={'ainesosa'} onChange={handleNameChange} />
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
    gap: 5,
  },
  buttonRemove: {
    alignSelf: 'center'
  }
});

export default Ingredient;