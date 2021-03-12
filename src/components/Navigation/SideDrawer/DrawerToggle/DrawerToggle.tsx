import React from 'react';
import '../../../../styles/DrawerToggle.css';

interface DrawerToggleProps {
  clicked: () => void;
}

export const DrawerToggle: React.FC<DrawerToggleProps> = ({ clicked }) => (
  <div className="drawer-toggle" onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);
