import AutoResizeTextarea, { EditableHeader2 } from './AutoResizeTextarea';
import ItemRemoveButton from './ItemRemoveButton';

const TextContent = ({textContent, handleDelete, handleUpdate }) => {
  const handleTitleChange = (event) => {
    handleUpdate({...textContent, title: event.target.value});
  };

  const handleTextChange = (event) => {
    handleUpdate({...textContent, text: event.target.value});
  };

  return (
    <div className="text-content">
      <ItemRemoveButton handleDelete={handleDelete} />
      <EditableHeader2 replacedValue={textContent.title} placeholder={'Ohje'} onChange={handleTitleChange} />
      <AutoResizeTextarea replacedValue={textContent.text} placeholder={'Ohjeen teksti'} onChange={handleTextChange} />
    </div>
  );
};

export default TextContent;
