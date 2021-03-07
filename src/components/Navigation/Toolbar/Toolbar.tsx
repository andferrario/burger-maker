import React from 'react';
import '../../../styles/Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';

export const Toolbar: React.FC = () => (
  <header className="toolbar">
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);
