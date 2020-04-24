import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { GlobalStyle, Theme } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
