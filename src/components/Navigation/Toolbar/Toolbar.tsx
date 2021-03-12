import React from 'react';
import '../../../styles/Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';

interface ToolbarProps {
  clicked: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ clicked }) => (
  <header className="toolbar">
    <div onClick={clicked}>MENU</div>
    <div className="logo-desktop">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
);
