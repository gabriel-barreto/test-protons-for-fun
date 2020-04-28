import React from 'react';
import PropTypes from 'prop-types';

import { ChevronLeft, ChevronRight } from 'styled-icons/material';

import * as S from './styled';

function GalleryControls({ children, onControlClick }) {
  return (
    <S.GalleryControls>
      <S.GalleryControlButton
        alt="Fotos Anteriores"
        title="Fotos Anteriores"
        type="button"
        onClick={() => onControlClick('prev')}
      >
        <ChevronLeft size={32} />
      </S.GalleryControlButton>

      <S.GalleryThumbs>{children}</S.GalleryThumbs>

      <S.GalleryControlButton
        alt="Próximas Fotos"
        title="Próximas Fotos"
        type="button"
        onClick={() => onControlClick('next')}
      >
        <ChevronRight size={32} />
      </S.GalleryControlButton>
    </S.GalleryControls>
  );
}

GalleryControls.defaultProps = { children: null };
GalleryControls.propTypes = {
  children: PropTypes.node,
  onControlClick: PropTypes.func.isRequired,
};

export default GalleryControls;
