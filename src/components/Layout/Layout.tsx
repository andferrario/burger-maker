import React from 'react';
import '../../styles/Layout.css';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../Navigation/SideDrawer/SideDrawer';

export const Layout: React.FC = ({ children }) => (
  <>
    <SideDrawer />
    <Toolbar />
    <main className="content">{children}</main>
  </>
);
