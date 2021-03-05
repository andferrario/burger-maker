import React from 'react';
import { Ingredient } from '../../utils/Ingredient';
import { Button } from '../../UI/Button/Button';

interface OrderSummaryProps {
  ingredients: Ingredient;
  continuePurchase: () => void;
  cancelPurchase: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ ingredients, continuePurchase, cancelPurchase }) => {
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
      <Button clicked={cancelPurchase} buttonType="danger">
        CANCEL
      </Button>
      <Button clicked={continuePurchase} buttonType="success">
        CONTINUE
      </Button>
    </>
  );
};
