import React from 'react';
import { Ingredient } from '../../utils/Ingredient';

interface OrderSummaryProps {
  ingredients: Ingredient;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ ingredients }) => {
  const orderList = Object.keys(ingredients).map((ingredientName) => (
    <li key={ingredientName}>
      <span style={{ textTransform: 'capitalize' }}>{ingredientName}</span>: {ingredients[ingredientName]}
    </li>
  ));

  return (
    <>
      <h3>YOUR ORDER</h3>
      <p>A super burger with the following ingredients:</p>
      <ul>{orderList}</ul>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </>
  );
};
