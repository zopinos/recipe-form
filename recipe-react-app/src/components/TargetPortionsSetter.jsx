import { useDispatch, useSelector } from 'react-redux';
import { setTargetPortionsAmount } from '../reducers/targetPortionsReducer';

const TargetPortionsSetter = () => {
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const dispatch = useDispatch();

  const hideWhenVisible = { display: targetPortions.included ? 'none' : '' };
  const showWhenVisible = { display: targetPortions.included ? '' : 'none' };

  const toggleVisibility = () => {
    dispatch(setTargetPortionsAmount({
      portions: targetPortions.portions,
      included: !targetPortions.included
    }));
  };

  const handleInputUpdate = (event) => {
    const { value, min } = event.target;
    if (!Number(value) && value !== '') return;
    const newValue = value === ''
      ? ''
      : Math.max(Number(min), Number(value));
    dispatch(setTargetPortionsAmount({
      included: targetPortions.included,
      portions: newValue
    }));
  };

  return (
    <div>
      <div style={hideWhenVisible} className='hidden-target-portions-setter'>
        <button className='button-text' onClick={toggleVisibility}>
          <span>Lisää annosmäärä</span>
        </button>
      </div>
      <div style={showWhenVisible}>
        <div className='target-portions-setter'>
          <input id='portions-input' type='text' inputMode="numeric" value={targetPortions.portions} onChange={handleInputUpdate} min={1} maxLength={2} />
          <span id='portions-text'>annosta</span>
          <button className="button button-delete" type="button" onClick={toggleVisibility}>
            <svg className='graphics-remove-ingredient' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.2 105.2">
              <path d="M52.6 0A52.6 52.6 0 0 0 0 52.6a52.6 52.6 0 0 0 52.6 52.6 52.6 52.6 0 0 0 52.6-52.6A52.6 52.6 0 0 0 52.6 0zm-.2 20.7c6.2 0 12 4.7 14.7 12.4 5.1 0 9.7.1 13.9.4a3.5 3.5 0 0 1 3.3 3.7 3.5 3.5 0 0 1-3.7 3.3l-5.2-.3c2.2 22.7 2 32.7.3 38.4a3.5 3.5 0 0 1-3.5 2.5c-21.8-1-27.5 0-39.4.3a3.5 3.5 0 0 1-3.6-3.2c-.8-10.2-1.1-22.7-.1-37.2l-4.7.2a3.5 3.5 0 0 1-3.6-3.3 3.5 3.5 0 0 1 3.3-3.7l13.5-.5c2.3-8.1 8.3-13 14.8-13zm-.1 7c-2.6 0-5.4 1.5-7.2 5.7l12.6-.3h1.8c-2-3.9-4.8-5.4-7.2-5.4zm12 12.4c-7.8 0-17 .2-28.2.6-1 13-.7 24.1 0 33.6l5-.2.7-23.6a3.5 3.5 0 0 1 3.6-3.4 3.5 3.5 0 0 1 3.4 3.6L48.1 74h9.5l-1.1-24.1a3.5 3.5 0 0 1 3.3-3.7 3.5 3.5 0 0 1 3.7 3.4l1.1 24.4 4.8.2c.7-4.8.8-14.7-1-34h-4.1z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TargetPortionsSetter;