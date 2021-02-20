import React from 'react';
import { Layout } from './Layout/Layout';
// eslint-disable-next-line import/named
import { BurgerMaker } from './BurgerMaker';

export const App: React.FC = () => (
  <Layout>
    <BurgerMaker />
  </Layout>
);
