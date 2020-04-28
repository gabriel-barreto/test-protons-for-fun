import styled, { css } from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-row-gap: 1.6rem;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`;

export const GalleryActivePhoto = styled.img`
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  min-height: 72rem;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const GalleryThumbImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const thumbPseudoBase = css`
  align-items: center;
  color: ${({ theme }) => theme.colors.lightest.hex()};
  content: '👁️';
  display: flex;
  font-size: ${({ theme }) => theme.sizes.h1};
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  text-shadow: ${({ theme }) => theme.shadows.sm};
  transition-duration: 400ms;
  transition-property: background, color, opacity;
  width: 100%;
  will-change: background, color, opacity;
`;
export const GalleryThumbButton = styled.button`
  background: none;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 100%;
  max-height: 20rem;
  max-width: 25.6rem;
  outline-color: ${({ theme }) => theme.colors.primary.hex()};
  padding: 0;
  position: relative;
  transition: transform 400ms;
  width: 100%;
  will-change: transform;

  &::before {
    ${thumbPseudoBase};

    background: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.colors.primaryLight.alpha(0.88)},
      ${({ theme }) => theme.colors.primaryDark.alpha(0.88)}
    );
    z-index: 2;
  }

  &::after {
    ${thumbPseudoBase};

    background: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.colors.dark.alpha(0.88)},
      ${({ theme }) => theme.colors.darkest.alpha(0.88)}
    );
    z-index: 3;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
  &:active {
    transform: scale(0.88);
  }

  &.--active {
    &::before {
      opacity: 1;
    }
    &:hover {
      &::before {
        opacity: 0;
      }
      &::after {
        color: ${({ theme }) => theme.colors.secondaryDark.hex()};
        opacity: 1;
      }
    }
  }
`;

export const GalleryThumbItem = styled.li`
  height: 100%;
  width: 100%;
`;

export const GalleryThumbs = styled.ul`
  align-items: center;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 1.6rem;
  width: 100%;
`;

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
