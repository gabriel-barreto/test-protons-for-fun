import styled from 'styled-components';

export const GalleryControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const GalleryControlButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: 0 2px 4px transparent;
  color: ${({ theme }) => theme.colors.lightest.hex()};
  display: flex;
  flex: 1;
  height: 4.8rem;
  justify-content: center;
  outline-color: ${({ theme }) => theme.colors.primary.hex()};
  padding: 1rem;
  transition-duration: 400ms;
  transition-property: background-color, box-shadow, transform;
  width: 4.8rem;
  will-change: background-color, box-shadow, transform;

  &:last-of-type {
    transform: rotate(180deg);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkest};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  &:active {
    transform: scale(0.88);
    &:last-of-type {
      transform: rotate(180deg) scale(0.88);
    }
  }
`;

export const GalleryThumbs = styled.ul`
  align-items: center;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 1.6rem;
  width: 100%;
`;
