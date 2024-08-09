import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useDispatch } from 'react-redux';
import Dialog from 'react-native-dialog';
import theme from '../theme';

import { setTitle } from '../reducers/titleReducer.js';
import { setTargetPortionsAmount } from '../reducers/targetPortionsReducer.js';
import { setIngredientLists } from '../reducers/ingredientReducer.js';
import { setTextContent } from '../reducers/textContentReducer.js';
import { getAllKeys, getItem, removeItem } from '../utils/AsyncStorage.js';
import CustomButton from './Buttons/CustomButton';
import { Back, Edit, Trashcan } from './Buttons/ButtonGraphics';

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
      <Text style={styles.itemTitle}>{title}</Text>
      <View style={styles.itemButtonContainer}>
        <CustomButton onPress={() => handleOpen()}>
          <Edit />
        </CustomButton>
        <CustomButton onPress={() => handleDelete()}>
          <Trashcan />
        </CustomButton>
      </View>
    </View>
  );
};

const LoadWindow = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState(null);

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
      setDeleteCandidate(null);
      setDeleteDialogVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTopBar}>
        <CustomButton noPressStyling onPress={() => navigate('/')}>
          <Back />
        </CustomButton>
        <Text style={styles.header}>Avaa resepti</Text>
      </View>
      <FlatList
        style={styles.list}
        data={recipes}
        renderItem={({item}) =>
          <Item
            title={item}
            handleDelete={() => {
              setDeleteDialogVisible(true);
              setDeleteCandidate(item);
            }}
          />
        }
        keyExtractor={item => item}
      />
      <Dialog.Container visible={deleteDialogVisible}>
        <Dialog.Title>Poista resepti</Dialog.Title>
        <Dialog.Description>
          Poistetaanko resepti?
        </Dialog.Description>
        <Dialog.Button label="Peruuta" onPress={() => {
          setDeleteCandidate(null);
          setDeleteDialogVisible(false);
        }}/>
        <Dialog.Button label="Poista" onPress={() => handleRecipeDelete(deleteCandidate)}/>
      </Dialog.Container>
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
    borderRadius: theme.roundness.textField,
    borderColor: theme.colors.tertiary,
    borderStyle: 'solid',
    borderWidth: 3,
  },
  itemTitle: {
    fontFamily: theme.fonts.mainBold,
    fontSize: theme.fontSizes.heading
  },
  itemButtonContainer: {
    flexDirection: 'row',
    gap: 60,
    marginTop: 5
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