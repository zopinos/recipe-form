import AutoResizeTextarea, { EditableHeader2 } from './AutoResizeTextarea';

const TextContent = () => {
  return (
    <div className="text-content">
      <EditableHeader2 placeholder={'Ohje'} />
      <AutoResizeTextarea placeholder={'Ohjeen teksti'} />
    </div>
  );
};

export default TextContent;
