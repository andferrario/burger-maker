import React from 'react';
import './Layout.css';

export const Layout: React.FC = ({ children }) => (
  <>
    <div>Toolbar, sidebar, menu</div>
    <main className="content">{children}</main>
  </>
);
