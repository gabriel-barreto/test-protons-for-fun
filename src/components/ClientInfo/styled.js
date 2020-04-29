import styled from 'styled-components';

export const Info = styled.div``;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.lightest};
  font-size: ${({ theme }) => theme.sizes.h2};
  font-weight: ${({ theme }) => theme.weights.strong};
  margin: 0 0 2.4rem 0;
`;

export const AddressLabel = styled.p`
  font-weight: ${({ theme }) => theme.weights.strong};
  margin: 0 0 0.8rem 0;
`;

export const AddressLine = styled.p`
  &:not(:last-of-type) {
    margin: 0 0 0.4rem 0;
  }
`;

export const AddressWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lightest};
  font-size: ${({ theme }) => theme.sizes.p};
  line-height: 144%;
`;
