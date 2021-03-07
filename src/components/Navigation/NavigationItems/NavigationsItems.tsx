import React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';
import '../../../styles/NavigationItems.css';

export const NavigationItems: React.FC = () => (
  <ul className="navigation-items">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </ul>
);
