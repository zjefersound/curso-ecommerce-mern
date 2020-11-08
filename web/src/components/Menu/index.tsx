import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { Container, LogoutButton } from './styles';

interface PathsProps {
  path: string;
  label: string;
  visible: boolean;
}

const Menu: React.FC = () => {
  const { authenticated, handleLogout } = useContext(AuthContext);
  const paths: PathsProps[] = [
    { path: '/', label: 'Home', visible: true },
    { path: '/dashboard', label: 'Dashboard', visible: !!authenticated },
    { path: '/signin', label: 'Sign in', visible: !authenticated },
    { path: '/signup', label: 'Sign up', visible: !authenticated },
  ]

  return (
    <Container>
      <ul>
        {paths.filter(p => p.visible).map(({ path, label }, index) => (
          <li className={``} key={index}>
            <Link to={path}>
              {label}
            </Link>
          </li>
        ))}
        {authenticated && (
          <li>
            <LogoutButton onClick={handleLogout}>
              Log out
            </LogoutButton>
          </li>
        )}
      </ul>
    </Container>
  )
}

export default Menu;