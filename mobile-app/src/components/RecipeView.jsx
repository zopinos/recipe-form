import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import IngredientsTable from './RecipeView/IngredientsTable';

const RecipeView = () => {
  const title = useSelector(({ title }) => title);
  const portions = useSelector(({ targetPortions }) => targetPortions);
  const ingredientLists = useSelector(({ ingredientLists }) => ingredientLists);
  const textContents = useSelector(({ textContents }) => textContents);

  return (
    <View style={styles.recipeView}>
      <Text style={styles.h1}>{title}</Text>
      {portions.included && <Text style={styles.portions}>{portions.portions} annosta</Text>}
      <IngredientsTable ingredientLists={ingredientLists}/>
      {textContents.map(textContent =>
        <View key={textContent.id}>
          <Text style={styles.h2}>{textContent.title}</Text>
          <Text style={styles.p}>
            {textContent.text}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  recipeView: {
    
  },
  h1: {

  },
  h2: {

  },
  p: {

  },
  portions: {

  }
});

export default RecipeView;