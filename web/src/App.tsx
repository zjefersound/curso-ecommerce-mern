import React from 'react';
import dotenv from 'dotenv';
import { SWRConfig } from 'swr';

import api from './services/api';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import { CustomThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
dotenv.config();

function App() {
  return (
    <CustomThemeProvider>
      <SWRConfig value={{
        fetcher: (url: string) => api(url).then(r => r.data)
      }}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SWRConfig>
      <GlobalStyles />
    </CustomThemeProvider>
  );
}

export default App;
