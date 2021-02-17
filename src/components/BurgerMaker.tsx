import React, { useState } from 'react';
import { Burger } from './Burger/Burger';

export const BurgerMaker: React.FC = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    cheese: 2,
    meat: 1,
    bacon: 2,
  });
  const addIngredientsHandler = (type: string) => {
    const newCount = ingredients.type] + 1;
    const updatedIngredient = { ...ingredients };
    updatedIngredient[type] = newCount;
    setIngredients(updatedIngredient);
  };

  const removeIngredientsHandler = (type: string) => {
    const newCount = ingredients[type] - 1;
    const updatedIngredient = { ...ingredients };
    updatedIngredient[type] = newCount;
    setIngredients(updatedIngredient);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Burger Control</div>
      <div>
        <button onClick={() => addIngredientsHandler('meat')}> + Meat</button>
        {ingredients.meat}
        <button onClick={() => removeIngredientsHandler('meat')}> - Meat</button>
      </div>
      <div>
        <button onClick={() => addIngredientsHandler('cheese')}> + Cheese</button>
        {ingredients.cheese}
        <button onClick={() => removeIngredientsHandler('cheese')}> - Cheese</button>
      </div>
    </>
  );
};
