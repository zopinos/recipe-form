import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme';


const IngredientsTable = ({ ingredientLists }) => {
  return (
    <View>
      {ingredientLists.map(ingredientList => 
        <View key={ingredientList.id}>
          <Text style={styles.h2}>{ingredientList.title}</Text>
          {ingredientList.ingredients.map(ingredient =>
            <View style={styles.ingredient} key={ingredient.id}>
              <Text style={styles.amount}>{ingredient.amount}</Text>
              <Text style={styles.name}>{ingredient.name}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    marginTop: 40,
    marginBottom: 15,
    fontFamily: theme.fonts.mainBold,
    fontSize: theme.fontSizes.subheading
  },
  ingredient: {
    flexDirection: 'row',
    gap: 8
  },
  amount: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    flex: 1
  },
  name: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    flex: 6
  }
});

export default IngredientsTable;