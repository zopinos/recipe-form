import { Pressable, View } from 'react-native';
import { RemoveItem } from './ButtonGraphics';
import CustomButton from './CustomButton';

const ItemRemoveButton = ({ handleDelete }) => {
  return (
    <View style={{ alignItems: 'flex-end'}}>
      <CustomButton onPress={handleDelete}>
        <RemoveItem />
      </CustomButton>
    </View>
  );
};
  

export default ItemRemoveButton;