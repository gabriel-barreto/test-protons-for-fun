import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.lightest.hex()};
  font-size: ${({ theme }) => theme.sizes.h2};
  font-weight: ${({ theme }) => theme.weights.strong};
  line-height: 136%;
  margin: 0 0 0.8rem 0;
  transition: color 400ms;
  will-change: color;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.lightest.hex()};
  font-size: ${({ theme }) => theme.sizes.p};
  line-height: 144%;

  &:not(:last-of-type) {
    margin: 0 0 0.4rem 0;
  }
`;

const hoverCard = css`
  transform: translateX(16px);
`;

const activeCard = css`
  border-left-color: ${({ theme }) => theme.colors.primary.hex()};
  > ${Title} {
    color: ${({ theme }) => theme.colors.primary.hex()};
  }

  &:hover {
    ${hoverCard};
    border-left-color: ${({ theme }) => theme.colors.secondary.hex()};

    > ${Title} {
      color: ${({ theme }) => theme.colors.secondary.hex()};
    }
  }
`;

export const Card = styled(Link)`
  background-color: ${({ theme }) => theme.colors.darkest.hex()};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-left: 8px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 48rem;
  padding: 3.2rem;
  text-decoration: none;
  transform-origin: left center;
  transition: border-left-color 400ms, transform 400ms;
  width: 100%;
  will-change: border-left-color, transform;

  &:hover {
    ${hoverCard};
    > ${Title} {
      color: ${({ theme }) => theme.colors.primary.hex()};
    }
  }
  &:active {
    transform: translateX(0) scale(0.96);
  }

  &.--active {
    ${activeCard};
  }
`;
