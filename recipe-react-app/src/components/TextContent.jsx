import { useDispatch } from 'react-redux';
import AutoResizeTextarea, { EditableHeader2 } from './AutoResizeTextarea';
import { changeTitles } from '../reducers/titlesReducer';
import { changeInstructions } from '../reducers/instructionsReducer';

const TextContent = () => {
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    dispatch(changeTitles({ instructionsTitle: event.target.value }));
  };

  const handleInstructionsChange = (event) => {
    dispatch(changeInstructions(event.target.value));
  };

  return (
    <div className="text-content">
      <EditableHeader2 placeholder={'Ohje'} onChange={handleTitleChange} />
      <AutoResizeTextarea placeholder={'Ohjeen teksti'} onChange={handleInstructionsChange} />
    </div>
  );
};

export default TextContent;
