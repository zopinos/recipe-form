import { useDispatch, useSelector } from 'react-redux';

import AutoResizeTextInput from './AutoResizeTextInput';

import { setTitle } from '../../reducers/titleReducer';


const TitleInput = () => {
  const title = useSelector(({ title }) => title);

  const dispatch = useDispatch();

  const handleTitleChange = (text) => {
    dispatch(setTitle(text));
  };

  return (
    <AutoResizeTextInput
      placeholder={'Otsikko'}
      heading
      value={title}
      onChangeText={handleTitleChange}
    />
  );
};

export default TitleInput;