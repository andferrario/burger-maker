import React from 'react';
import { Control } from './Control';
import '../../styles/BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
];

interface BuildControlsProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
}

export const BuildControls: React.FC<BuildControlsProps> = ({ ingredientAdded, ingredientRemoved }) => {
  return (
    <div className="build-controls">
      {controls.map((control) => {
        return (
          <Control
            key={control.label}
            label={control.label}
            added={() => ingredientAdded(control.type)}
            removed={() => ingredientRemoved(control.type)}
          />
        );
      })}
    </div>
  );
};
