import { useState, useRef, useEffect } from 'react'

const AutoResizeTextarea = () => {
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
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className="auto-resize-textarea"
      rows={1}

      autoComplete="off"
      autoCapitalize="sentences"
      autoCorrect="off"
      maxLength={9999}
      spellCheck="false"
    />
  )
}

export default AutoResizeTextarea
