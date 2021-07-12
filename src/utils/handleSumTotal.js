// import { useContext } from 'react';
// import AppContext from '../context/AppContext';

// const { state } = useContext(AppContext);

// const { cart } = state;

const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);

  return sum;
};

export default handleSumTotal;
