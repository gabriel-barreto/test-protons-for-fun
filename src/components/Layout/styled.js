import styled from 'styled-components';

export const Layout = styled.main`
  background-color: ${({ theme }) => theme.colors.dark.hex()};
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 16rem 6.4rem 3.2rem 6.4rem;
`;
