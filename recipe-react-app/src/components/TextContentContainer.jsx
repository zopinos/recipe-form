import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextContent from './TextContent';
import { createTextContent, removeTextContent, updateTextContent } from '../reducers/textContentReducer';

const TextContentContainer = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const textContents = useSelector(({ textContents }) => textContents);

  return (
    <div className="text-content-container">
      {textContents.map(textContent => 
        <TextContent
          key={textContent.id}
          textContent={textContent}
          handleDelete={() => dispatch(removeTextContent(textContent.id))}
          handleUpdate={(payload) => dispatch(updateTextContent(payload))}
        />
      )}
      <button
        type='button'
        onClick={() => {
          dispatch(createTextContent(count));
          setCount((prevValue) => prevValue + 1);
        }}
      >
        <span>
          add new text
        </span>
      </button>
    </div>
  );
};

export default TextContentContainer;
