import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import '../../styles/Logo.css';

export const Logo: React.FC = () => (
  <div className="logo">
    <img src={burgerLogo} alt="burger logo" />
  </div>
);
