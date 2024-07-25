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
      <div style={hideWhenVisible}>
        <button className='button button-text' onClick={toggleVisibility}>
          <span>Lisää annosmäärä</span>
        </button>
      </div>
      <div style={showWhenVisible}>
        <div className='target-portions-setter'>
          <input id='portions-input' type='text' inputMode="numeric" value={targetPortions.portions} onChange={handleInputUpdate} min={1} maxLength={2} />
          <span id='portions-text'>annosta</span>
          <button className="button button-delete" type="button" onClick={toggleVisibility}>
            <img className='graphics-remove-ingredient' src='/src/assets/remove-ingredient-2.svg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TargetPortionsSetter;