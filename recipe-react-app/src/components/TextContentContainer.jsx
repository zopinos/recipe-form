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
      <div className='container-add-item'>
        <button
          className='button button-add-text'
          type='button'
          onClick={() => {
            dispatch(createTextContent(count));
            setCount((prevValue) => prevValue + 1);
          }}
        >
          <img className='graphics-add-text' src='/src/assets/add-text.svg' />
        </button>
      </div>
    </div>
  );
};

export default TextContentContainer;
