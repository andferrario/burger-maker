import React from 'react';
import '../../../styles/Toolbar.css';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle/DrawerToggle';

interface ToolbarProps {
  clicked: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ clicked }) => (
  <header className="toolbar">
    <DrawerToggle clicked={clicked} />
    <div className="logo-desktop">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
);
