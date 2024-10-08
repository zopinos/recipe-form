import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import Dialog from 'react-native-dialog';
import { useKeepAwake } from 'expo-keep-awake';

import EditView from './EditView.jsx';
import RecipeView from './RecipeView.jsx';

import TextButton from './Buttons/TextButton.jsx';
import { Hide, Show } from './Buttons/ButtonGraphics.jsx';
import { setItem } from '../utils/AsyncStorage.js';

const RecipeWindow = () => {
  const [recipeView, setRecipeView] = useState(false);
  const [saveDialogVisible, setSaveDialogVisible] = useState(false);
  const [saveName, setSaveName] = useState('');

  const nameInputRef = useRef(null);

  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredients = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  const navigate = useNavigate();

  useKeepAwake();

  const handleSaveDialogOpen = () => {
    setSaveDialogVisible(true);
  };

  const handleRecipeSaving = async () => {
    try {
      await setItem(saveName, { title, portions, ingredients, textContents });
    } catch (error){
      console.error('Error saving recipe:', error);
    } finally {
      if (nameInputRef && nameInputRef.current) {
        nameInputRef.current.blur();
      }
      setSaveDialogVisible(false);
    }
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
        contentContainerStyle={{ paddingTop: 80}}
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
            onPress={() => handleSaveDialogOpen()}
          />
          <TextButton
            text='Avaa'
            onPress={() => handleLoadPress()}
          />
        </View>
      </ScrollView>
      <View>
        <Dialog.Container visible={saveDialogVisible}>
          <Dialog.Title>Tallenna resepti</Dialog.Title>
          <Dialog.Description>
            Tallenetaanko resepti?
          </Dialog.Description>
          <Dialog.Input placeholder='Reseptin nimi' onChangeText={(text) => setSaveName(text)} textInputRef={nameInputRef} />
          <Dialog.Button label="Peruuta" onPress={() => setSaveDialogVisible(false)}/>
          <Dialog.Button label="Tallenna" onPress={() => handleRecipeSaving()}/>
        </Dialog.Container>
      </View>
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