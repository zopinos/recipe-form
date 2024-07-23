const Togglable = (props) => {
  const { visible } = props;

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    props.handleChange(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className='button button-text' onClick={toggleVisibility}>
          <span>{props.toggleOnLabel}</span>
        </button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button className='button button-text' onClick={toggleVisibility}>
          <span>{props.toggleOffLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default Togglable;