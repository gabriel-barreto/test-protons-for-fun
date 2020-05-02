import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.dark.alpha(0.88)},
    ${({ theme }) => theme.colors.darkest.alpha(0.88)}
  );
  background-blend-mode: multiply;
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  opacity: ${({ active }) => (active ? 1 : 0)};
  top: 0;
  transition: opacity 400ms, visibility 400ms;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  left: 0;
  width: 100%;
  will-change: opacity, visibility;
  z-index: 999;
`;

const spinnerSize = '10rem';
const spinnerAnimation = css`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export const Spinner = styled.div`
  ${spinnerAnimation};
  animation: spin 0.96s linear infinite;
  border: 16px solid ${({ theme }) => theme.colors.lightest.alpha(0.04)};
  border-left-color: ${({ theme }) => theme.colors.primaryDark.hex()};
  border-radius: 50%;
  height: ${spinnerSize};
  width: ${spinnerSize};
`;
