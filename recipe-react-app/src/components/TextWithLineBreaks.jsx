import { Fragment } from 'react';

const TextWithLineBreaks = (text) => {
  if (!text) return;
  
  return text.split('\n').map((text, index) => (
    <Fragment key={index}>
      {text}
      <br />
    </Fragment>
  ));
};

export default TextWithLineBreaks;