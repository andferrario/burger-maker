import React from 'react';
import { BurgerIngredient } from './BurgerIngredient';

export const Burger: React.FC = () => (
  <div>
    <BurgerIngredient ingredientType="bread-top" />
    <BurgerIngredient ingredientType="bread-bottom" />
  </div>
);
