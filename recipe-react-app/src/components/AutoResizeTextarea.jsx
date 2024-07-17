import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
`;

const AutoResizeTextarea = ({ className, placeholder, replacedValue, onChange }) => {
  const [text, setText] = useState(replacedValue);
  /* const [selection, setSelection] = useState(); */
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);

  useEffect(() => {
    setText(replacedValue);
  }, [replacedValue]);

  /* useEffect(() => {
    document.addEventListener('selectionchange', () => {
      const activeSelection = document.getSelection();
      const selectionToText = activeSelection?.toString();
      setSelection(selectionToText);
    });
  }, []); */

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
    setText(event.target.value);
  };

  return (
    <Textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className={className}
      rows={1}

      placeholder={placeholder}

      autoComplete="off"
      autoCapitalize="sentences"
      autoCorrect="off"
      maxLength={9999}
      spellCheck="false"
    />
  );
};

export const EditableHeader1 = styled(AutoResizeTextarea)`
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
`;

export const EditableHeader2 = styled(AutoResizeTextarea)`
  font-weight: 700;
  width: 50%;
  margin-top: 5px;
  padding: 8px;
  text-decoration: underline;
`;

export const IngredientText = styled(AutoResizeTextarea)`
  margin-top: 1px;
  padding: 8px;
  
  width: 100%;
  text-align: left;
`;

export const IngredientAmountText = styled(IngredientText)`
  margin-right: 8px;
  width: 100%;
  text-align: right;
  text-transform: lowercase;
`;

export default AutoResizeTextarea;
