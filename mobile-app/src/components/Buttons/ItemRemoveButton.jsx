import { StyleSheet, View } from 'react-native';
import { RemoveItem } from './ButtonGraphics';
import CustomButton from './CustomButton';

const ItemRemoveButton = ({ handleDelete }) => {
  return (
    <View style={styles.containerButton}>
      <CustomButton onPress={handleDelete}>
        <RemoveItem />
      </CustomButton>
    </View>
  );
};
  
const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'flex-end'
  }
});

export default ItemRemoveButton;