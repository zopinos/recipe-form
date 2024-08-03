import { useDispatch, useSelector } from 'react-redux';
import IngredientList from './IngredientList';
import {
  changeIngredientListTitle,
  createIngredient,
  createIngredientList,
  removeIngredient,
  removeIngredientList,
  updateIngredient
} from '../../reducers/ingredientReducer';
import { StyleSheet, View } from 'react-native';
import { AddList } from '../Buttons/ButtonGraphics';
import CustomButton from '../Buttons/CustomButton';

const IngredientListContainer = () => {
  const dispatch = useDispatch();

  const ingredientLists = useSelector(({ ingredientLists }) => ingredientLists);

  return (
    <View style={styles.containerList}>
      {ingredientLists.map(ingredientList => 
        <IngredientList
          key={ingredientList.id}
          ingredientList={ingredientList}
          handleDelete={() => dispatch(removeIngredientList(ingredientList.id))}
          handleUpdate={(title) => dispatch(changeIngredientListTitle({ id: ingredientList.id, title}))}
          handleIngredientAdd={(listID) => dispatch(createIngredient({ listID }))}
          handleIngredientRemove={(listID, ingredientID) => dispatch(removeIngredient({ listID, ingredientID }))}
          handleIngredientUpdate={(listID, ingredientID, name, amount) => dispatch(updateIngredient({ listID, ingredientID, name, amount }))}
        />
      )}
      <View style={styles.containerAddItem}>
        <CustomButton
          onPress={() => { dispatch(createIngredientList()); }}
        >
          <AddList />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    marginTop: 40
  },
  containerAddItem: {
    alignItems: 'center',
    marginTop: 25
  }
});

export default IngredientListContainer;
