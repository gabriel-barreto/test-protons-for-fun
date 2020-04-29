import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.h3};
  font-weight: ${({ theme }) => theme.weights.strong};
  line-height: 136%;
  margin: 0 0 0.8rem 0;
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.sizes.p};
  line-height: 160%;
`;

export const PostCard = styled.article`
  background-color: ${({ theme }) => theme.colors.darkest};
  box-shadow: ${({ theme }) => theme.shadows.md};
  color: ${({ theme }) => theme.colors.lightest};
  padding: 3.2rem;
`;
