import styled, { css } from 'styled-components';

export const GalleryThumbImg = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const GalleryThumbItem = styled.li`
  height: 100%;
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
