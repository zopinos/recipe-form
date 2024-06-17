import AutoResizeTextarea, { EditableHeader2 } from './AutoResizeTextarea';

const TextContent = () => {
  return (
    <div className="text-content">
      <EditableHeader2 placeholder={'Content Title'} />
      <AutoResizeTextarea placeholder={'Recipe text'} />
    </div>
  );
};

export default TextContent;
