import React from 'react';
import { Layout } from './layout/Layout';
import { BurgerMaker } from './BurgerMaker';

export const App: React.FC = () => (
  <Layout>
    <BurgerMaker />
  </Layout>
);
