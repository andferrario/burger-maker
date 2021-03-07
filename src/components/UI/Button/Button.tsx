import React from 'react';
import '../../../styles/Button.css';

interface ButtonProps {
  clicked: () => void;
  buttonType: string;
}

export const Button: React.FC<ButtonProps> = ({ children, clicked, buttonType }) => (
  <button type="button" onClick={clicked} className={['button', buttonType].join(' ')}>
    {children}
  </button>
);
