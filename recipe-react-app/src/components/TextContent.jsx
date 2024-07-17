import AutoResizeTextarea, { EditableHeader2 } from './AutoResizeTextarea';

const TextContent = ({textContent, handleDelete, handleUpdate }) => {
  const handleTitleChange = (event) => {
    handleUpdate({...textContent, title: event.target.value});
  };

  const handleTextChange = (event) => {
    handleUpdate({...textContent, text: event.target.value});
  };

  return (
    <div className="text-content">
      <button className='button button-remove-item' type="button" onClick={handleDelete}>
        <img className='graphics-remove-item' src='/src/assets/remove-item.svg' />
      </button>
      <EditableHeader2 replacedValue={textContent.title} placeholder={'Ohje'} onChange={handleTitleChange} />
      <AutoResizeTextarea replacedValue={textContent.text} placeholder={'Ohjeen teksti'} onChange={handleTextChange} />
    </div>
  );
};

export default TextContent;
