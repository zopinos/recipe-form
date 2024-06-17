import { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changePortionAmount } from '../reducers/ingredientReducer';

const MAX = 999;
const MIN = 1;

const PortionsSelector = () => {
  const [portions, setPortions] = useState(1);
  const prevPortionsRef = useRef(portions);
  const dispatch = useDispatch();

  const updateIngredients = useCallback((prevPortionAmount, newPortionAmount) => {
    dispatch(changePortionAmount({ prevPortionAmount, newPortionAmount }));
  }, [dispatch]);

  useEffect(() => {
    if (prevPortionsRef.current !== portions) {
      updateIngredients(prevPortionsRef.current, portions);
      prevPortionsRef.current = portions;
    }
  }, [portions, updateIngredients]);

  const increment = () => {
    setPortions((prevValue) => {
      return Math.min(Number(prevValue) + 1, MAX);
    });
  };
  const decrement = () => {
    setPortions((prevValue) => {
      return Math.max(Number(prevValue) - 1, MIN);
    });
  };

  const handleInputUpdate = (event) => {
    const { value, min, max } = event.target;
    const newValue = value === ''
      ? ''
      : Math.min(Number(max), Math.max(Number(min), Number(value)));
    setPortions(newValue);
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