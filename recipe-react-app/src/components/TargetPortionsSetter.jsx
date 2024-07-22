import { useDispatch, useSelector } from 'react-redux';
import { setTargetPortionsAmount } from '../reducers/targetPortionsReducer';

const TargetPortionsSetter = () => {
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const dispatch = useDispatch();

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
    <div className='target-portions-setter'>
      <input id='portions-input' type='text' inputMode="numeric" value={targetPortions.portions} onChange={handleInputUpdate} min={1} maxLength={2} />
      <span id='portions-text'>annosta</span>
    </div>
  );
};

export default TargetPortionsSetter;