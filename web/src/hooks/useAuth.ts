import { useState, useEffect } from 'react';
import api from '../services/api';

export interface AuthProviderProps {
  authenticated?: boolean;
  loginErrorMessage?: string;
  loading: boolean;
  handleLogin: (data: LoginProps) => void;
  handleLogout: () => void;
}

interface LoginProps {
  email: string;
  password: string;
}

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);

  }, []);

  const handleLogin = async (data: LoginProps) => {
    setLoginErrorMessage('');
    setLoading(true);

    try {
      await api.post(`/signin`, data)
        .then(response => {
          if (!response.data.error) {
            const { token, user } = response.data;
            setAuthenticated(true);

            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(user));
            api.defaults.headers.Authorization = `Bearer ${token}`;

          } else {
            setLoginErrorMessage(response.data.error);
          }
        }).finally(() => {
          setLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  };

  const handleLogout = async () => {
    //set axios headers to undefined
    try {
      api.defaults.headers.Authorization = undefined;
      localStorage.clear();
      setAuthenticated(false);
    } catch (error) {
      alert(error);
    }
  };

  return {
    loading,
    authenticated,
    handleLogin,
    handleLogout,
    loginErrorMessage,
  };
}

export default useAuth;