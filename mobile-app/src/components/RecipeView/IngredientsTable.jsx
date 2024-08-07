import { StyleSheet, Text, View } from 'react-native';


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

  },
  ingredient: {

  },
  amount: {

  },
  name: {

  }
});

export default IngredientsTable;