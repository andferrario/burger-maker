import React from 'react';
import { Layout } from './Layout/Layout';
import { BurgerMaker } from './BurgerMaker/BurgerMaker';
import '../styles/App.css';

export const App: React.FC = () => (
  <Layout>
    <BurgerMaker />
  </Layout>
);
