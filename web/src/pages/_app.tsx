import { AppProps } from 'next/app';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { CustomThemeProvider } from '../contexts/ThemeContext';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <SWRConfig value={{fetcher: (url: string) => axios(url).then(r => r.data)}}>
        <Component {...pageProps} />
      </SWRConfig>
      <GlobalStyle />
    </CustomThemeProvider>
  );
}

export default MyApp;
