import AutoResizeTextarea from "./AutoResizeTextarea"

/*
  <textarea
      name="text"
      defaultValue={textContent}

      rows={20}

      autoComplete="off"
      autoCapitalize="sentences"
      autoCorrect="off"
      maxLength={9999}
      spellCheck="false"
  ></textarea>
*/

const TextContent = ({ textContent }) => {
  return (
    <div className="textarea-container">
    <textarea
      name="text"
      defaultValue={textContent}

      rows={20}

      autoComplete="off"
      autoCapitalize="sentences"
      autoCorrect="off"
      maxLength={9999}
      spellCheck="false"
    ></textarea>
    </div>
  )
}

export default TextContent
