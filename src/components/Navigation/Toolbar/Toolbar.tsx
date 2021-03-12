import React from 'react';
import '../../../styles/Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';

export const Toolbar: React.FC = () => (
  <header className="toolbar">
    <div>MENU</div>
    <div className="logo-desktop">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
);
