import styled from 'styled-components';

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
