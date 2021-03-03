import React from 'react';
import { Ingredient } from '../../utils/Ingredient';

interface OrderSummaryProps {
  ingredients: Ingredient;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ ingredients }) => {
  const orderList = Object.keys(ingredients).map((ingredientName) => (
    <li>
      <span style={{ textTransform: 'capitalize' }}>{ingredientName}</span>: {ingredients[ingredientName]}
    </li>
  ));

  return (
    <>
      <p>YOUR ORDER</p>
      <p>A super burger with the following ingredients:</p>
      <ul>{orderList}</ul>
    </>
  );
};
