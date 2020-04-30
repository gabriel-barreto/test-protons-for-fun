import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import AppContextProvider from './contexts';
import { GlobalStyle, Theme } from './styles';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
