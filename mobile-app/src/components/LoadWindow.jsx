import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomButton from './Buttons/CustomButton';
import { Back } from './Buttons/ButtonGraphics';
import { useNavigate } from 'react-router-native';
import theme from '../theme';

const LoadWindow = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.containerTopBar}>
        <CustomButton noPressStyling onPress={() => navigate('/')}>
          <Back />
        </CustomButton>
        <Text style={styles.header}>Lataa resepti</Text>
      </View>
      {/* <FlatList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  containerTopBar: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: theme.colors.tertiary
  },
  header: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.windowHeading,
    color: 'white'
  }
});

export default LoadWindow;