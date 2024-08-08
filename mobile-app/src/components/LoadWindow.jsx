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
import { getAllKeys, getItem, removeItem } from '../utils/AsyncStorage.js';
import { useEffect, useState } from 'react';
import TextButton from './Buttons/TextButton.jsx';

const Item = ({ title, handleDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateImport = (json) => {
    const { title, portions, ingredients, textContents } = json;
    dispatch(setTitle(title));
    dispatch(setTargetPortionsAmount(portions));
    dispatch(setIngredientLists(ingredients));
    dispatch(setTextContent(textContents));
  };
  
  const handleOpen = async () => {
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
    <View style={styles.item}>
      <Pressable onPress={() => handleOpen()} >
        <Text style={styles.itemTitle}>{title}</Text>
      </Pressable>
      <TextButton
        text='Poista'
        onPress={() => handleDelete()}
      />
    </View>
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

  const handleRecipeDelete = async (key) => {
    try {
      await removeItem(key);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    } finally {
      setRecipes(recipes.filter(recipe => recipe !== key));
    }
  };

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
        renderItem={({item}) => <Item title={item} handleDelete={() => handleRecipeDelete(item)}/>}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    paddingHorizontal: 30,
  },
  item: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.roundness.textField
  },
  itemTitle: {
    fontFamily: theme.fonts.mainBold,
    fontSize: theme.fontSizes.windowHeading
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
  },
});

export default LoadWindow;