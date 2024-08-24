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
      heading={true}
      replacedValue={title}
      onChange={handleTitleChange}
    />
  );
};

export default TitleInput;