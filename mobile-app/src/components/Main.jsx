import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import TitleInput from './TextInputs/TitleInput.jsx';

import theme from '../theme.js';

SplashScreen.preventAutoHideAsync();

const Main = () => {
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

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}>
      <TitleInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 40,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
  testText: {
    fontFamily: 'SourceSerif4-Regular'
  }
});

export default Main;