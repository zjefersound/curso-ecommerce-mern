import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  description: string;
  className?: string;
}

const Layout: React.FC<Props> = ({ 
  title, 
  description,
  className, 
  children 
}) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
}

export default Layout;