import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  const { url, path: currentPath, isExact } = useRouteMatch();
  const isActive = (path: string) => {
    const active = currentPath === path ? 'active' : '';
    return active as string;
  };

  const paths = [
    { path: '/', label: 'Home' },
    { path: '/signin', label: 'Sign in' },
    { path: '/signup', label: 'Sign up' },
  ]

  return (
    <Container>
      <ul>
        {paths.map(({ path, label }) => (
          <li className={isActive(path)}>
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