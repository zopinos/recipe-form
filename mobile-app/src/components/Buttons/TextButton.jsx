import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../../theme';

const TextButton = ({ onPress, text }) => {
  const buttonStyles = ({pressed}) => [styles.button, pressed ? styles.pressed : styles.notPressed];

  return (
    <Pressable style={buttonStyles} onPress={onPress}>
      <Text style={styles.text}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.roundness.buttons,
    paddingVertical: 10,
    paddingHorizontal: 13,
    marginTop: 0,
  },
  notPressed: {
    color: theme.colors.textButton,
    backgroundColor: theme.colors.textButton
  },
  pressed: {
    color: theme.colors.textButtonPressed,
    backgroundColor: theme.colors.textButtonPressed
  },
  text: {
    color: theme.colors.buttonText,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: theme.fontSizes.body,
    letterSpacing: 1,
    lineHeight: 30,
  }
});

export default TextButton;