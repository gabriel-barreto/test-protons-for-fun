import styled from 'styled-components';

export const Illustration = styled.img`
  height: auto;
  max-height: 40rem;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

export const Warning = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.h2};
  font-weight: ${({ theme }) => theme.weights.strong};
  line-height: 136%;
  margin: 1.6rem 0 1rem 0;
`;

export const Legend = styled.p`
  color: ${({ theme }) => theme.colors.lightest};
  font-size: ${({ theme }) => theme.sizes.h3};
  font-weight: ${({ theme }) => theme.weights.strong};
  line-height: 144%;
`;

export const Action = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  color: ${({ theme }) => theme.colors.lightest};
  display: flex;
  font-size: ${({ theme }) => theme.sizes.p};
  justify-content: center;
  margin: 1.6rem 0 0 0;
  min-height: 4.4rem;
  padding: 0.8rem 3.2rem;
  transition: background-color 400ms;
  will-change: background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 48rem;

  > ${Warning}, > ${Legend} {
    text-align: center;
  }
`;
