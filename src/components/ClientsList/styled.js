import styled from 'styled-components';

export const List = styled.ul`
  height: 100%;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin: 0 0 1rem 0;
  }
`;
