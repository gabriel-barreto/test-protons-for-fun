import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  width: 100%;

  > div:first-of-type {
    margin: 0 0 3.2rem 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
