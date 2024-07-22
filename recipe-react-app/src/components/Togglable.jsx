import { useState } from 'react';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.toggleOnLabel}</button>
      </div>
      <div style={showWhenVisible}>

        {props.children}
        <button onClick={toggleVisibility}>{props.toggleOffLabel}</button>
      </div>
    </div>
  );
};

export default Togglable;