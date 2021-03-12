import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationsItems';
import '../../../styles/SideDrawer.css';
import { Backdrop } from '../../UI/Backdrop/Backdrop';

interface SideDrawerProps {
  show: boolean;
  clicked: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ show, clicked }) => {
  let attachedClass = ['side-drawer', 'close'];
  if (show) {
    attachedClass = ['side-drawer', 'open'];
  }

  return (
    <>
      <div className={attachedClass.join(' ')}>
        <div className="logo-mobile">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <Backdrop show={show} clicked={clicked} />
    </>
  );
};
