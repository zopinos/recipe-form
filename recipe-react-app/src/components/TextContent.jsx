import React from 'react';

const convertNewlinesToBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const TextContent = ({ textContent }) => {
  return <p>{convertNewlinesToBreaks(textContent)}</p>;
};

export default TextContent;
