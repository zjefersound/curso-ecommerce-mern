import React, { FormEvent, useCallback, useState } from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/Forms/TextInput';

import { Container, ErrorPanel, SuccessPanel, ErrorIcon } from './styles';
import shopImg from '../../assets/shop.webp';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    const data = { ...formData, [name]: value }
    setFormData(data);
    setError('');
  }, [formData]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    api.post('/signup', formData).then(res => {
      setSuccess(true);
    }).catch((res) => {
      setError('Erro no servidor');
    });
  }

  return (
    <Container>
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
              <h2>Cadastre-se <br />na nossa loja!</h2>

              {error && (
                <ErrorPanel>
                  <ErrorIcon />
                  {error}
                </ErrorPanel>
              )}
              <form onSubmit={handleSubmit}>
                <TextInput
                  name='name'
                  placeholder='Nome'
                  required
                  onChange={handleInputChange}
                  errorMessage=''
                />
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
                  Cadastrar
                </Button>
              </form>
            </>
        )}

      </div>
      <div>
        <img src={shopImg} alt="hero" />
      </div>
      <div className='bg' />
    </Container>
  );
}

export default Signup;