import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, Theme } from '../src/styles';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
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
addDecorator(withKnobs);
addDecorator(withRouter);
addDecorator(withTheme);
addDecorator(withWrapper);
