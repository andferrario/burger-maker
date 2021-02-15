import React from 'react';
import { BurgerIngredient } from './BurgerIngredient';
import '../../styles/Burger.css';

interface BurgerProps {
  ingredients: Record<string, number>;
}

export const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const ingredientsToComponent = Object.keys(ingredients).map((ingredientName) => {
    const amount = ingredients[ingredientName];
    return [...Array(amount)].map((_, index) => {
      const uniqueIngredientKey = ingredientName + index;
      return <BurgerIngredient key={uniqueIngredientKey} ingredientType={ingredientName} />;
    });
  });

  return (
    <div className="burger">
      <BurgerIngredient ingredientType="bread-top" />
      {ingredientsToComponent}
      <BurgerIngredient ingredientType="bread-bottom" />
    </div>
  );
};
