import styled from 'styled-components';

import { $breakpoints } from '../../utils';

export const Container = styled.div`
  padding: 16rem 3.2rem 3.2rem 3.2rem;

  @media screen and (min-width: ${$breakpoints('lg')}) {
    padding: 16rem 6.4rem 3.2rem 6.4rem;
  }
`;

export const Layout = styled.main`
  background-color: ${({ theme }) => theme.colors.dark.hex()};
  overflow: hidden;

  @media screen and (min-width: ${$breakpoints('lg')}) {
    height: 100vh;
  }
`;
