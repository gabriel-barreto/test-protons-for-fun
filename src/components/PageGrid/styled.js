import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-column-gap: 6.4rem;
  grid-template-columns: 1fr 2.5fr;
  height: ${({ theme }) => theme.sizes.layoutWrapper};
  width: 100%;
`;
