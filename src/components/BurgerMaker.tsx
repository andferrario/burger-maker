import React, { useState } from 'react';
import { Burger } from './Burger/Burger';
import { BuildControls } from './BuildControls/BuildControls';
import { Ingredient } from '../utils/Ingredient';

const INGREDIENT_PRICE = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.4,
  bacon: 0.7,
};

export const BurgerMaker: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient>({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4.0);

  const addIngredientHandler = (type: string) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredients[type] + 1;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice + INGREDIENT_PRICE[type]);
  };

  const removeIngredientHandler = (type: string) => {
    const updatedIngredients = { ...ingredients };
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    updatedIngredients[type] = oldCount - 1;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice - INGREDIENT_PRICE[type]);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        ingredients={ingredients}
      />
    </>
  );
};
