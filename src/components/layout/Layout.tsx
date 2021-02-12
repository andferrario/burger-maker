import React from 'react';

export const Layout: React.FC = ({ children }) => (
  <>
    <div>Toolbar, sidebar, menu</div>
    <main>{children}</main>
  </>
);
