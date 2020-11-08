import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {

  const paths = [
    { path: '/', label: 'Home' },
    { path: '/signin', label: 'Sign in' },
    { path: '/signup', label: 'Sign up' },
  ]

  return (
    <Container>
      <ul>
        {paths.map(({ path, label }, index) => (
          <li className={``} key={index}>
            <Link to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Menu;