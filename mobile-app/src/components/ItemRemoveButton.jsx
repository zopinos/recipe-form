import { Pressable, View } from 'react-native';
import { RemoveItem } from './ButtonGraphics';

const ItemRemoveButton = ({ handleDelete }) => {
  return (
    <View style={{ alignItems: 'flex-end'}}>
      <Pressable onPress={handleDelete}>
        <RemoveItem />
      </Pressable>
    </View>
  );
};
  

export default ItemRemoveButton;