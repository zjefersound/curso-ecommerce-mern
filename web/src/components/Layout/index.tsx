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
      <h1>{title}</h1>
      <span>{description}</span>
      {children}
    </Container>
  );
}

export default Layout;