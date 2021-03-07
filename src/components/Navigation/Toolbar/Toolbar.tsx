import React from 'react';
import '../../../styles/Toolbar.css';
import { Logo } from '../../Logo/Logo';

export const Toolbar: React.FC = () => (
  <header className="toolbar">
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);
