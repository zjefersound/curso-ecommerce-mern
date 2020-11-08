import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { CustomThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <Routes />
      <GlobalStyles />
    </CustomThemeProvider>
  );
}

export default App;
