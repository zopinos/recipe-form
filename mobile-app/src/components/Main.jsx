import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import EditView from './EditView.jsx';
import RecipeView from './RecipeView.jsx';

import theme from '../theme.js';

SplashScreen.preventAutoHideAsync();

const Main = () => {
  const [recipeView, setRecipeView] = useState(false);

  const [fontsLoaded] = useFonts({
    'SourceSerif4-Regular': require('../../assets/fonts/SourceSerif4-Regular.ttf'),
    'SourceSerif4-Bold': require('../../assets/fonts/SourceSerif4-Bold.ttf'),
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
    <ScrollView
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      {recipeView ? <RecipeView /> : <EditView />}
      <Button title='Katselu tila' onPress={() => handleToggle()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 40,
    paddingVertical: 0,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
  testText: {
    fontFamily: 'SourceSerif4-Regular'
  }
});

export default Main;