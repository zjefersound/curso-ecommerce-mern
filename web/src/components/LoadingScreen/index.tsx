import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import { Container } from './styles';

const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
}

export default LoadingScreen;