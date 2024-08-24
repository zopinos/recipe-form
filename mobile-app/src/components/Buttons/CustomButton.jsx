import { Pressable, StyleSheet } from 'react-native';
import theme from '../../theme';

const CustomButton = (props) => {
  const noPressStyling = props.noPressStyling ? false : true;
  const buttonStyles = ({pressed}) => [styles.button, noPressStyling && (pressed ? styles.pressed : styles.notPressed)];

  return (
    <Pressable
      style={buttonStyles}
      onPress={props.onPress}
      hitSlop={props.hitSlop ? props.hitSlop : 5}
      pressRetentionOffset={props.pressRetentionOffset ? props.pressRetentionOffset : 4}>
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