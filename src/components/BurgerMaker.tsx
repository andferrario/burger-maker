import React, { useState } from 'react';
import { Burger } from './Burger/Burger';
import { BuildControls } from './BuildControls/BuildControls';

export const BurgerMaker: React.FC = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </>
  );
};
