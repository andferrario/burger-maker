import React, { useState } from 'react';
import { Burger } from './Burger/Burger';
import { BuildControls } from './BuildControls/BuildControls';
import { Ingredient } from '../utils/Ingredient';
import { Modal } from './Modal/Modal';
import { OrderSummary } from './OrderSummary/OrderSummary';

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
  const [totalPrice, setTotalPrice] = useState<number>(4.0);
  const [purchasable, setPurchasable] = useState<boolean>(false);
  const [showReceipt, setShowReceipt] = useState<boolean>(false);

  const updatePurchasable = (updatedIngredients: Ingredient) => {
    const sumOfIngredients = Object.values(updatedIngredients).reduce((acc, elem) => acc + elem, 0);
    setPurchasable(sumOfIngredients >= 1);
  };

  const showPurchaseHandler = () => {
    setShowReceipt(true);
  };

  const cancelPurchaseHandler = () => {
    setShowReceipt(false);
  };

  const addIngredientHandler = (type: string) => {
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = ingredients[type] + 1;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice + INGREDIENT_PRICE[type]);
    updatePurchasable(updatedIngredients);
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
    updatePurchasable(updatedIngredients);
  };

  return (
    <>
      <Burger ingredients={ingredients} />
      <Modal show={showReceipt} clicked={cancelPurchaseHandler}>
        <OrderSummary ingredients={ingredients} />
      </Modal>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        ingredients={ingredients}
        price={totalPrice}
        purchasable={purchasable}
        showReceipt={showPurchaseHandler}
      />
    </>
  );
};
