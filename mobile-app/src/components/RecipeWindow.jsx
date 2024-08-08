import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import Dialog from 'react-native-dialog';

import EditView from './EditView.jsx';
import RecipeView from './RecipeView.jsx';

import TextButton from './Buttons/TextButton.jsx';
import { Hide, Show } from './Buttons/ButtonGraphics.jsx';
import { setItem } from '../utils/AsyncStorage.js';

const RecipeWindow = () => {
  const [recipeView, setRecipeView] = useState(false);

  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  const navigate = useNavigate();

  const handleSaving = async () => {
    await setItem('testRecipe', { title, portions, ingredients, textContents });
  };

  const handleToggle = () => {
    setRecipeView(!recipeView);
  };

  const handleLoadPress = () => {
    return navigate('/load');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {recipeView ? <RecipeView />: <EditView />}
        <View style={styles.containerViewButton}>
          <TextButton
            text='Katselutila'
            onPress={() => handleToggle()}
            togglable={true}
            toggleOnChild={<Hide />}
            toggleOffChild={<Show />}
          />
        </View>
        <View style={styles.containerSaveLoad}>
          <TextButton
            text='Tallenna'
            onPress={() => handleSaving()}
          />
          <TextButton
            text='Avaa'
            onPress={() => handleLoadPress()}
          />
        </View>
      </ScrollView>
      {/* <View>
        <Dialog.Container visible={true}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="Delete" />
        </Dialog.Container>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 30,
  },
  containerViewButton: {
    marginTop: 30,
    marginBottom: 20,
    gap: 20
  },
  containerSaveLoad: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 50,
    gap: 6
  }
});

export default RecipeWindow;