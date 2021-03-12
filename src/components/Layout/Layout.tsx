import React, { useState } from 'react';
import '../../styles/Layout.css';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

export const Layout: React.FC = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <SideDrawer show={showSideDrawer} clicked={sideDrawerToggleHandler} />
      <Toolbar clicked={sideDrawerToggleHandler} />
      <main className="content">{children}</main>
    </>
  );
};
