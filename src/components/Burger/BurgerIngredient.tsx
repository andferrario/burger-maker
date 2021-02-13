import React from 'react';
import '../../styles/BurgerIngredient.css';

interface IngredientProps {
  ingredientType: string;
}

export const BurgerIngredient: React.FC<IngredientProps> = ({ ingredientType }) => {
  let ingredient;
  switch (ingredientType) {
    case 'bread-bottom':
      ingredient = <div className="bread-bottom" />;
      break;
    case 'bread-top':
      ingredient = (
        <div className="bread-top">
          <div className="seeds1" />
          <div className="seeds2" />
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className="meat" />;
      break;
    case 'salad':
      ingredient = <div className="salad" />;
      break;
    case 'cheese':
      ingredient = <div className="cheese" />;
      break;
    case 'bacon':
      ingredient = <div className="bacon" />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};
