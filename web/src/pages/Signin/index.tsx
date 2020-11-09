import React, { FormEvent, useCallback, useContext, useState } from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/Forms/TextInput';

import { Container, ErrorPanel, SuccessPanel, ErrorIcon } from './styles';
import loginImg from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { handleLogin, loginErrorMessage } = useContext(AuthContext);

  const handleInputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    const data = { ...formData, [name]: value }
    setFormData(data);
    setError('');
  }, [formData]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin(formData);
  }

  return (
    <Container>
      <div>
        <img src={loginImg} alt="hero" />
      </div>
      <div>
        {success ? (
          <SuccessPanel>
            <h2>Sucesso!</h2>
            <p>Agora você já pode desfrutar de todas as funcionalidade que só nossos cadastrados possuem</p>

            <Link to='/'>
              Ir para a home
            </Link>
          </SuccessPanel>

        ) : (
            <>
              <h2>Faça seu Log in</h2>

              {loginErrorMessage && (
                <ErrorPanel>
                  <ErrorIcon />
                  {loginErrorMessage}
                </ErrorPanel>
              )}
              <form onSubmit={handleSubmit}>
                <TextInput
                  type='email'
                  name='email'
                  required
                  placeholder='E-mail'
                  onChange={handleInputChange}
                  errorMessage=''
                />
                <TextInput
                  type='password'
                  name='password'
                  required
                  placeholder='Senha'
                  onChange={handleInputChange}
                  errorMessage=''
                />
                <Button type='submit'>
                  Entrar
                </Button>
              </form>
            </>
          )}

      </div>
      <div className='bg' />
    </Container>
  );
}

export default Signin;