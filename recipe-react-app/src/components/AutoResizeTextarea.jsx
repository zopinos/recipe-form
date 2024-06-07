import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'

const Textarea = styled.textarea`
  width: 100%;
  margin-top: 30px;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
`

const AutoResizeTextarea = ({ className }) => {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    adjustTextareaHeight();
  }, [text])

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <Textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className={className}
      rows={1}

      autoComplete="off"
      autoCapitalize="sentences"
      autoCorrect="off"
      maxLength={9999}
      spellCheck="false"
    />
  )
}

const EditableTitle = styled(AutoResizeTextarea)`
  font-size: 36px;
  font-weight: 700;
`

export {AutoResizeTextarea, EditableTitle}
