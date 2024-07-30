import { useDispatch, useSelector } from 'react-redux';
import { EditableHeader1 } from './AutoResizeTextarea';
import TargetPortionsSetter from './TargetPortionsSetter';
import IngredientListContainer from './IngredientListContainer';
import TextContentContainer from './TextContentContainer';
import { setTitle } from '../reducers/titleReducer';

const EditView = () => {
  const title = useSelector(({ title }) => title);

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.target.value));
  };

  return (
    <div className='edit-view'>
      <EditableHeader1
        placeholder={'Otsikko'}
        replacedValue={title}
        onChange={handleTitleChange}
      />
      <TargetPortionsSetter />
      <IngredientListContainer />
      <TextContentContainer />
    </div>
  );
};

export default EditView;