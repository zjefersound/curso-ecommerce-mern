import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { CustomThemeProvider } from './contexts/ThemeContext';
import dotenv from 'dotenv';
import { AuthProvider } from './contexts/AuthContext';

dotenv.config();

function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <Routes />
        <GlobalStyles />
      </CustomThemeProvider>
    </AuthProvider>
  );
}

export default App;
