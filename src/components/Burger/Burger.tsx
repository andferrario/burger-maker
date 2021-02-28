import React from 'react';
import { BurgerIngredient } from './BurgerIngredient';
import '../../styles/Burger.css';
import { Ingredient } from '../../utils/Ingredient';

interface BurgerProps {
  ingredients: Ingredient;
}

export const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const ingredientsToComponent = Object.keys(ingredients)
    .map((ingredientName) => {
      const amount = ingredients[ingredientName];
      return [...Array(amount)].map((_, index) => {
        const uniqueIngredientKey = ingredientName + index;
        return <BurgerIngredient key={uniqueIngredientKey} ingredientType={ingredientName} />;
      });
    })
    .flat(); // .reduce((acc, val) => acc.concat(val),[]);

  const noIngredients = <p>Please add ingredients!</p>;
  return (
    <div className="burger">
      <BurgerIngredient ingredientType="bread-top" />
      {ingredientsToComponent.length === 0 ? noIngredients : ingredientsToComponent}
      <BurgerIngredient ingredientType="bread-bottom" />
    </div>
  );
};
