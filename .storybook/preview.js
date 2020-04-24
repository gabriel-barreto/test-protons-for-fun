import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme } from '../src/styles';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);
const withTheme = (storyFn) => (
  <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
);
const withRouter = (storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>;
const withWrapper = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;

addDecorator(withGlobalStyle);
addDecorator(withRouter);
addDecorator(withTheme);
addDecorator(withWrapper);
