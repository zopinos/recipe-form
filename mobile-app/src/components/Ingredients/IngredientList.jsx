import Ingredient from './Ingredient';
import SubheaderInput from '../TextInputs/SubheaderInput';
import ItemRemoveButton from '../Buttons/ItemRemoveButton';
import { StyleSheet, View } from 'react-native';
import { AddIngredient } from '../Buttons/ButtonGraphics';
import CustomButton from '../Buttons/CustomButton';

const IngredientList = ({
  ingredientList,
  handleDelete,
  handleUpdate,
  handleIngredientAdd,
  handleIngredientRemove,
  handleIngredientUpdate
}) => {
  const ingredients = ingredientList.ingredients;

  const handleTitleChange = (text) => {
    handleUpdate(text);
  };

  return (
    <View style={styles.ingredientsList}>
      <ItemRemoveButton handleDelete={handleDelete} />
      <SubheaderInput replacedValue={ingredientList.title} placeholder={'Ainesosat'} onChange={handleTitleChange} />
      <View>
        {ingredients.map(ingredient => 
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            listID={ingredientList.id}
            handleDelete={() => handleIngredientRemove(ingredientList.id, ingredient.id)}
            handleUpdate={handleIngredientUpdate}
          />
        )}
      </View>
      <View style={styles.buttonAddIngredient}>
        <CustomButton
          onPress={() => { handleIngredientAdd(ingredientList.id); }}
        >
          <AddIngredient />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsList: {
    marginBottom: 40
  },
  ingredientTable: {

  },
  buttonAddIngredient: {
    marginTop: 10
  }
});

export default IngredientList;