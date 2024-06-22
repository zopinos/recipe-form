import { useDispatch, useSelector } from 'react-redux';
import { changeTargetPortionsAmount } from '../reducers/targetPortionsReducer';

const MAX = 99;
const MIN = 1;

const TargetPortionsSetter = () => {
  const targetPortions = useSelector(({ targetPortions }) => targetPortions);
  const dispatch = useDispatch();

  const handleInputUpdate = (event) => {
    const { value, min, max } = event.target;
    const newValue = value === ''
      ? ''
      : Math.min(Number(max), Math.max(Number(min), Number(value)));
    dispatch(changeTargetPortionsAmount(newValue));
  };

  return (
    <div className='target-portions-setter'>
      <input type='number' value={targetPortions} onChange={handleInputUpdate} min={MIN} max={MAX} />
      <span id='portions-text'>annosta</span>
    </div>
  );
};

export default TargetPortionsSetter;