import styled from 'styled-components';

export const ClientsListWrapper = styled.ul`
  height: 100%;
  overflow-y: scroll;
  min-height: 100vh;
  width: 100%;
`;

export const ClientListItem = styled.li`
  &:not(:last-of-type) {
    margin: 0 0 1rem 0;
  }
`;
