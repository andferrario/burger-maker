import React from 'react';
import { Control } from './Control';
import '../../styles/BuildControls.css';
import { Ingredient } from '../../utils/Ingredient';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
];

interface BuildControlsProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  ingredients: Ingredient;
  price: number;
  purchasable: boolean;
}

export const BuildControls: React.FC<BuildControlsProps> = ({
  ingredientAdded,
  ingredientRemoved,
  ingredients,
  price,
  purchasable,
}) => {
  return (
    <div className="build-controls">
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <Control
            key={control.label}
            label={control.label}
            added={() => ingredientAdded(control.type)}
            removed={() => ingredientRemoved(control.type)}
            disabled={ingredients[control.type] <= 0}
          />
        );
      })}
      <button className="order-button" type="button" disabled={!purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};
