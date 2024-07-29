import { useDispatch, useSelector } from 'react-redux';
import TextContent from './TextContent';
import { createTextContent, removeTextContent, updateTextContent } from '../reducers/textContentReducer';

const TextContentContainer = () => {
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
            dispatch(createTextContent());
          }}
        >
          {/* <img className='graphics-add-text' src='/src/assets/add-text.svg' draggable='false' /> */}
          <svg className='graphics-add-text' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.2">
            <path d="M52.6 0a52.6 52.6 0 1 0 0 105.2A52.6 52.6 0 0 0 52.6 0zm3.1 23c8.3 0 15.5.5 21.3 1.6a2.3 2.3 0 0 1 1.9 2.2c-.1 10.9-.2 21.4.2 30.4a2.3 2.3 0 0 1-2.1 2.3 2.3 2.3 0 0 1-2.4-2.1c-.3-8.5-.3-18.5-.2-28.6-10.3-1.7-26-1.3-43.2-.3-.7 15.8-.6 31.2.2 46.3 7.4-.2 15.3 0 23.8.6a2.3 2.3 0 0 1 2 2.4 2.3 2.3 0 0 1-2.3 2c-9.3-.6-17.7-.7-25.6-.4a2.3 2.3 0 0 1-2.3-2.2c-1-16.5-1.2-33.5-.2-51a2.3 2.3 0 0 1 2-2.2c9.6-.5 18.7-1 27-1zm-3.4 13.3a217.9 217.9 0 0 1 14.6.4A2.3 2.3 0 0 1 69 39a2.3 2.3 0 0 1-2.3 2.2 238 238 0 0 0-26.4 0 2.3 2.3 0 0 1-2.4-2.1 2.3 2.3 0 0 1 2.1-2.4c4.3-.3 8.4-.4 12.3-.4zM40 49.3c13.6 0 18 .3 27 .4a2.3 2.3 0 0 1 2.2 2.3 2.3 2.3 0 0 1-2.3 2.2c-9-.1-13.4-.4-27-.4a2.3 2.3 0 0 1-2.2-2.3 2.3 2.3 0 0 1 2.3-2.2zM48.2 62h4.4l14.2.3a2.3 2.3 0 0 1 2.2 2.3 2.3 2.3 0 0 1-2.2 2.2c-9.3 0-20.2-.7-26.6 0a2.3 2.3 0 0 1-2.5-2 2.3 2.3 0 0 1 2-2.4c2.5-.3 5.4-.4 8.5-.4zm28.4 3.8a2.3 2.3 0 0 1 2.3 2.3v6.3a321 321 0 0 1 5-.1c.5 0-1.6.1 1.1.1a2.3 2.3 0 0 1 2.3 2.3A2.3 2.3 0 0 1 85 79c-4.5 0 2.6-.3-6 0l-.4 7.5a2.3 2.3 0 0 1-2.4 2 2.3 2.3 0 0 1-2-2.4l.2-7-6.6.3a2.3 2.3 0 0 1-2.4-2.2 2.3 2.3 0 0 1 2.2-2.3l6.8-.3v-6.4a2.3 2.3 0 0 1 2.2-2.3z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TextContentContainer;
