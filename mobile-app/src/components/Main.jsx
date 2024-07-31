import { Text, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import TitleInput from './TextInputs/TitleInput.jsx';

import theme from '../theme.js';

const Main = () => {
  const [fontsLoaded] = useFonts({
    'SourceSerif4-Regular': require('../../assets/fonts/SourceSerif4-Regular.ttf'),
  });

  if (!fontsLoaded) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <TitleInput style={styles.titleInput} />
      <Text>Mooi jeipppiii</Text>
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
  titleInput: {
    fontFamily: 'SourceSerif4-Regular',
    fontSize: theme.fontSizes.heading,
    fontWeight: 'normal',
    fontStyle: 'normal',

    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 70,

    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 10,
    border: 'none',
  },
  testText: {
    fontFamily: 'SourceSerif4-Regular'
  }
});

export default Main;