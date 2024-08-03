import { Pressable, StyleSheet } from 'react-native';
import theme from '../../theme';

const CustomButton = (props) => {
  const buttonStyles = ({pressed}) => [styles.button, pressed ? styles.pressed : styles.notPressed];

  return (
    <Pressable style={buttonStyles} onPress={props.onPress}>
      {props.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
  notPressed: {
    opacity: theme.opacity.initial,
  },
  pressed: {
    opacity: theme.opacity.pressed
  }
});

export default CustomButton;