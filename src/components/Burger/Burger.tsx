import React from 'react';
import { BurgerIngredient } from './BurgerIngredient';
import '../../styles/Burger.css';

export const Burger: React.FC = () => (
  <div className="burger">
    <BurgerIngredient ingredientType="bread-top" />
    <BurgerIngredient ingredientType="salad" />
    <BurgerIngredient ingredientType="cheese" />
    <BurgerIngredient ingredientType="meat" />
    <BurgerIngredient ingredientType="bacon" />
    <BurgerIngredient ingredientType="bread-bottom" />
  </div>
);
