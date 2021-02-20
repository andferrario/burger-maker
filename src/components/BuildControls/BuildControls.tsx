import React from 'react';
import { Control } from './Control';
import '../../styles/BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
];

export const BuildControls: React.FC = () => {
  return (
    <div className="build-controls">
      {controls.map((control) => {
        return <Control key={control.label} label={control.label} />;
      })}
    </div>
  );
};
