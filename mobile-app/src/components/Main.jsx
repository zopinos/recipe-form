import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import EditView from './EditView.jsx';
import RecipeView from './RecipeView.jsx';

import theme from '../theme.js';
import TextButton from './Buttons/TextButton.jsx';

SplashScreen.preventAutoHideAsync();

const Main = () => {
  const [recipeView, setRecipeView] = useState(false);

  const [fontsLoaded] = useFonts({
    'SourceSerif4-Regular': require('../../assets/fonts/SourceSerif4-Regular.ttf'),
    'SourceSerif4-Bold': require('../../assets/fonts/SourceSerif4-Bold.ttf'),
    'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
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
        {recipeView ? <RecipeView /> : <EditView />}
        <View style={styles.containerViewMode}>
          <TextButton text='Katselu tila' onPress={() => handleToggle()} togglable={true} />
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
  containerViewMode: {
    marginBottom: 50
  }
});

export default Main;