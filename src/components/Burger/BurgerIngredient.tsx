import React from 'react';
import './BurgerIngredient.css';

interface IngredientProps {
  ingredientType: string;
}

export const BurgerIngredient: React.FC<IngredientProps> = ({ ingredientType }) => {
  let ingredient;
  switch (ingredientType) {
    case 'bread-bottom':
      ingredient = <div className="BreadBottom" />;
      break;
    case 'bread-top':
      ingredient = <div className="BreadTop" />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};
