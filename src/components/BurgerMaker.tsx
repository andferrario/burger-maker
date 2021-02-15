import React, { useState } from 'react';
import { Burger } from './Burger/Burger';

export const BurgerMaker: React.FC = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    cheese: 2,
    meat: 1,
    bacon: 2,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Burger Control</div>
    </>
  );
};
