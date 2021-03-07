import React from 'react';
import '../../../../styles/NavigationItem.css';

interface NavigationItemProps {
  link: string;
  active: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ link, active, children }) => (
  <li className="navigation-item">
    <a href={link} className={active ? 'active' : ''}>
      {children}
    </a>
  </li>
);
