import React from 'react';
import '../../styles/Layout.css';
import { Toolbar } from '../Navigation/Toolbar/Toolbar';

export const Layout: React.FC = ({ children }) => (
  <>
    <Toolbar />
    <main className="content">{children}</main>
  </>
);
