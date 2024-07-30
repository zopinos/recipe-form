import { allUnits, volumes, masses, conversions } from './constants';

export const findUnit = (amount) => {
  return allUnits
    .find(unit => 
      amount.split(/\s+/).includes(unit)
    );
};

export const hasUnit = (amount) => {
  return findUnit(amount) ? true : false;
};

export const findQuantity = (amount, foundUnit) => {
  const parts = amount.split(/\s+/);
  const idx = parts.indexOf(foundUnit);

  if (!(idx > 0)) return;

  return Number(parts[idx-1]);
};

export const hasQuantity = (amount, foundUnit) => {
  return findQuantity(amount, foundUnit) ? true : false;
};

export const hasConvertableAmount = (amount) => {
  const foundUnit = findUnit(amount);
  return (!!foundUnit) && hasQuantity(amount, foundUnit);
};

export const convertAmount = (amount, target) => {
  const foundUnit = findUnit(amount);
  const foundQuantity = findQuantity(amount, foundUnit);

  if (volumes.includes(foundUnit)) {
    const ratioToBase = 1 / conversions.volume[foundUnit];
    const asBaseUnit = foundQuantity * ratioToBase;
    const ratioToTarget = conversions.volume[target];

    return `${asBaseUnit * ratioToTarget} ${target}`;
  } else if (masses.includes(foundUnit)) {
    const ratioToBase = 1 / conversions.mass[foundUnit];
    const asBaseUnit = foundQuantity * ratioToBase;
    const ratioToTarget = conversions.mass[target];

    return `${asBaseUnit * ratioToTarget} ${target}`;
  }
};