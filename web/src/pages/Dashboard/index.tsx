import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import getRoleLabel from '../../utils/getRoleLabel';

import {
  Container,
  UserCard,
  HistoryCard,
  UserLinkCard,
} from './styles';

const Dashboard: React.FC = () => {
  const stringUser = localStorage.getItem('user') || '';
  const user = JSON.parse(stringUser);
  return (
    <Layout title='Dashboard' description='User dashboard'>
      <Container>
        <div>
          <UserLinkCard>
            <h2>Seus links</h2>
            <ul>
              <li>
                <Link to='/my-cart'>
                  Meu carrinho
                </Link>
              </li>
              <li>
                <Link to='/update-profile'>
                  Editar perfil
                </Link>
              </li>
            </ul>
          </UserLinkCard>
          <UserCard>
            <h2>Suas informações</h2>
            <span className='name'>{user.name}</span>
            <span className='email'>{user.email}</span>
            <span className='role'>{getRoleLabel(user.role)}</span>
          </UserCard>     
        </div>
        <div>
          <HistoryCard>
            <h2>Histórico de compras</h2>
            <p>historico</p>
          </HistoryCard>
        </div>
      </Container>
    </Layout>
  );
}

export default Dashboard;