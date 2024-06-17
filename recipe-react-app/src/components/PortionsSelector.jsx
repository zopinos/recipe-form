import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePortionAmount } from '../reducers/ingredientReducer';
import styled from 'styled-components';

const AmountSpan = styled.span`
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  width: 4em;
  height: 2em;
  text-align: center;
  line-height: 30px;
`;

const PortionsText = styled.span`
  margin-left: 0.8em;
`;

const MAX = 999;
const MIN = 1;

const PortionsSelector = () => {
  const [portions, setPortions] = useState(1);
  const dispatch = useDispatch();

  const updateIngredients = (prevPortionAmount, newPortionAmount) => {
    dispatch(changePortionAmount({ prevPortionAmount, newPortionAmount }));
  };

  const increment = () => {
    const prevValue = Number(portions);
    const newValue = Math.min(prevValue + 1, MAX);
    updateIngredients(prevValue, newValue);
    setPortions(newValue);
  };
  const decrement = () => {
    const prevValue = Number(portions);
    const newValue = Math.max(prevValue - 1, MIN);
    updateIngredients(prevValue, newValue);
    setPortions(newValue);
  };

  return (
    <div className='portions-selector'>
      <button onClick={() => decrement()} className='button button-delete' type='button'>
        <span className='material-symbols-outlined'>
          do_not_disturb_on
        </span>
      </button>
      <AmountSpan>{portions}</AmountSpan>
      <button onClick={() => increment()} className='button button-delete' type='button'>
        <span className='material-symbols-outlined'>
          add_circle
        </span>
      </button>
      <PortionsText>portions</PortionsText>
    </div>
  );
};

export default PortionsSelector;