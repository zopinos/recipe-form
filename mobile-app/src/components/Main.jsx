import { useCallback } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme.js';

import RecipeWindow from './RecipeWindow.jsx';
import LoadWindow from './LoadWindow.jsx';

SplashScreen.preventAutoHideAsync();

const Main = () => {
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

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Routes>
        <Route path='/' element={<RecipeWindow />} />
        <Route path='/load' element={<LoadWindow />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
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
    alignItems: 'stretch',
    marginBottom: 50,
    gap: 6
  }
});

export default Main;