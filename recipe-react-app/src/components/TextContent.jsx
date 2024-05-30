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
      maxLength={99999}
      spellCheck="false"
    ></textarea>
    </div>
  )
}

export default TextContent
