import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.dark.hex()};
  height: 100%;
  min-height: 100vh;
`;

export const LayoutContent = styled.div`
  padding: 16rem 6.4rem 3.2rem 6.4rem;
`;
