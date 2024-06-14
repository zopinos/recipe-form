import { useState } from 'react';
import { useDispatch } from 'react-redux';

const MAX = 999;
const MIN = 1;

const PortionsSelector = () => {
  const [portions, setPortions] = useState(1);
  const dispatch = useDispatch();

  const increment = () => {
    setPortions((prevValue) => {
      if (Number(prevValue) + 1 > MAX) return MAX;
      return Number(prevValue) + 1;
    });
  };
  const decrement = () => {
    setPortions((prevValue) => {
      if (Number(prevValue) - 1 < MIN) return MIN;
      return Number(prevValue) - 1;
    });
  };

  const handleInputUpdate = (event) => {
    const { value, min, max } = event.target;
    if (!value || value === '') {
      setPortions('');
      return;
    }
    setPortions(
      Math.min(Number(max), Math.max(Number(min), Number(value)))
    );
  };

  return (
    <div className='portions-selector'>
      <button onClick={() => decrement()} className='button button-delete' type='button'>
        <span className='material-symbols-outlined'>
          do_not_disturb_on
        </span>
      </button>
      <input type='number' value={portions} onChange={handleInputUpdate} min={MIN} max={MAX} />
      <button onClick={() => increment()} className='button button-delete' type='button'>
        <span className='material-symbols-outlined'>
          add_circle
        </span>
      </button>
      <span id='portions-text'>portions</span>
    </div>
  );
};

export default PortionsSelector;