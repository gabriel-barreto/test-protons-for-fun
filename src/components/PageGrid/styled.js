import styled from 'styled-components';

import { $breakpoints } from '../../utils';

import ClientList from '../ClientsList';

export const Grid = styled.section`
  overflow-x: hidden;
  width: 100%;

  @media screen and (min-width: ${$breakpoints('lg')}) {
    display: grid;
    grid-column-gap: 6.4rem;
    grid-template-columns: 1fr 2.5fr;
    height: ${({ theme }) => theme.sizes.layoutWrapper};
  }
`;

export const Clients = styled(ClientList)`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: trnasform 400ms;
  will-change: transform;

  @media screen and (min-width: ${$breakpoints('lg')}) {
    left: auto;
    position: relative;
    top: auto;
    transform: translate(0);
  }
`;
