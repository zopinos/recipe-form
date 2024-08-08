import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import CustomButton from './Buttons/CustomButton';
import { Back } from './Buttons/ButtonGraphics';
import { useNavigate } from 'react-router-native';
import { useDispatch } from 'react-redux';
import theme from '../theme';

import { setTitle } from '../reducers/titleReducer.js';
import { setTargetPortionsAmount } from '../reducers/targetPortionsReducer.js';
import { setIngredientLists } from '../reducers/ingredientReducer.js';
import { setTextContent } from '../reducers/textContentReducer.js';
import { getAllKeys, getItem } from '../utils/AsyncStorage.js';
import { useEffect, useState } from 'react';

const Item = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateImport = (json) => {
    const { title, portions, ingredients, textContents } = json;
    dispatch(setTitle(title));
    dispatch(setTargetPortionsAmount(portions));
    dispatch(setIngredientLists(ingredients));
    dispatch(setTextContent(textContents));
  };
  
  const handlePress = async () => {
    try {
      const fetchedRecipe = await getItem(title);
      handleStateImport(fetchedRecipe);
    } catch (error) {
      console.error('Error fetching recipe', error);
    } finally {
      navigate('/');
    }
  };

  return (
    <Pressable onPress={() => handlePress()} style={styles.item} >
      <Text style={styles.itemTitle}>{title}</Text>
    </Pressable>
  );
};

const LoadWindow = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedItems = await getAllKeys();
        setRecipes(fetchedItems);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTopBar}>
        <CustomButton noPressStyling onPress={() => navigate('/')}>
          <Back />
        </CustomButton>
        <Text style={styles.header}>Lataa resepti</Text>
      </View>
      <FlatList
        style={styles.list}
        data={recipes}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  list: {
    paddingHorizontal: 50
  },
  item: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField
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