import React from 'react';
import Layout from '../../components/Layout';
import Menu from '../../components/Layout/Menu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Layout title='Home' description='home'>

      </Layout>
    </>
  );
}

export default Home;