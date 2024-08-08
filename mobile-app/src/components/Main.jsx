import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import EditView from './EditView.jsx';
import RecipeView from './RecipeView.jsx';

import theme from '../theme.js';
import TextButton from './Buttons/TextButton.jsx';
import { Hide, Show } from './Buttons/ButtonGraphics.jsx';

SplashScreen.preventAutoHideAsync();

const Main = () => {
  const [recipeView, setRecipeView] = useState(false);

  const [fontsLoaded] = useFonts({
    'SourceSerif4-Regular': require('../../assets/fonts/SourceSerif4-Regular.ttf'),
    'SourceSerif4-Bold': require('../../assets/fonts/SourceSerif4-Bold.ttf'),
    /* 'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'), */
    'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) return null;

  const handleToggle = () => {
    setRecipeView(!recipeView);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
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
            width='100%'
          />
        </View>
        <View style={styles.containerSaveLoad}>
          <TextButton
            text='Tallenna'
            width='49%'
          />
          <TextButton
            text='Avaa'
            width='49%'
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 30,
    paddingVertical: 0,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
  containerViewButton: {
    marginTop: 30,
    marginBottom: 20,
    gap: 20
  },
  containerSaveLoad: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 50,
    gap: 6
  }
});

export default Main;