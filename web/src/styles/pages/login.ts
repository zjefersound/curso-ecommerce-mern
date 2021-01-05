import styled from 'styled-components';
import Button from '../../components/Buttons/Button';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 40rem;
  flex-direction: column;

  > input:not(:first-child) {
    margin-top: 2.4rem;
  }
`;

export const CustomButton = styled(Button)`
  margin-top: 2.4rem;
`;
