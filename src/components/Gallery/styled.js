import styled from 'styled-components';

import { $breakpoints } from '../../utils';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-row-gap: 1.6rem;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`;

export const ActivePhoto = styled.img`
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-height: 32rem;
  object-fit: cover;
  object-position: center;
  width: 100%;

  @media screen and (min-width: ${$breakpoints('md')}) {
    min-height: 48rem;
  }
  @media screen and (min-width: ${$breakpoints('lg')}) {
    min-height: 72rem;
  }
`;
