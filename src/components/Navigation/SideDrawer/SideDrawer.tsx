import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';
import '../../../styles/SideDrawer.css';

export const SideDrawer: React.FC = () => {
  return (
    <div className="side-drawer">
      <div className="logo-mobile">
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
