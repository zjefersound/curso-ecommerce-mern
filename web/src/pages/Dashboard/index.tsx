import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import getRoleLabel from '../../utils/getRoleLabel';
import AdminArea from './AdminArea';

import {
  Container,
  UserCard,
  HistoryCard,
  UserLinkCard,
} from './styles';

interface LinkProps {
  path: string;
  label: string;
}

const Dashboard: React.FC = () => {
  const stringUser = localStorage.getItem('user') || '';
  const user = JSON.parse(stringUser);

  const userLinks: LinkProps[] = [
    { path: '/my-cart', label: 'Meu carrinho' },
    { path: '/update-profile', label: 'Editar perfil' },
  ];
  
  const adminLinks: LinkProps[] = [
    { path: '/update-profile', label: 'Editar perfil' },
  ];

  const links: LinkProps[] = user.role === 1 ? adminLinks : userLinks;

  return (
    <Layout title='Dashboard' description={`Olá, ${user.name}! Esse é seu espaço para controle das informações`}>
      <Container>
        <div>
          <UserLinkCard>
            <h2>Seus links</h2>
            <ul>
              {links.map(({label, path}) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </UserLinkCard>
          <UserCard>
            <h2>Suas informações</h2>
            <span className='name'>{user.name}</span>
            <span className='email'>{user.email}</span>
            <span className='role'>{getRoleLabel(user.role)}</span>
          </UserCard>
        </div>
        {user.role !== 1 && (
          <div>
            <HistoryCard>
              <h2>Histórico de compras</h2>
              <p>historico</p>
            </HistoryCard>
          </div>
        )}
        {user.role === 1 && (
          <AdminArea />
        )}
      </Container>
    </Layout>
  );
}

export default Dashboard;