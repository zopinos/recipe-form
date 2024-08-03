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
    <View>
      <IngredientAmountInput replacedValue={ingredient.amount} placeholder={'määrä'} onChange={handleAmountChange} />
      <IngredientNameInput replacedValue={ingredient.name} placeholder={'nimi'} onChange={handleNameChange} />
      <CustomButton onPress={handleDelete}>
        <RemoveIngredient />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientRow: {

  }
});

export default Ingredient;