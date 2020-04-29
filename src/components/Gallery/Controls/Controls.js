import React from 'react';
import PropTypes from 'prop-types';

import { ChevronLeft, ChevronRight } from 'styled-icons/material';

import * as S from './styled';

function GalleryControls({ children, onControlClick }) {
  return (
    <S.Controls>
      <S.ControlButton
        alt="Fotos Anteriores"
        title="Fotos Anteriores"
        type="button"
        onClick={() => onControlClick('prev')}
      >
        <ChevronLeft size={32} />
      </S.ControlButton>

      <S.Thumbs>{children}</S.Thumbs>

      <S.ControlButton
        alt="Próximas Fotos"
        title="Próximas Fotos"
        type="button"
        onClick={() => onControlClick('next')}
      >
        <ChevronRight size={32} />
      </S.ControlButton>
    </S.Controls>
  );
}

GalleryControls.defaultProps = { children: null };
GalleryControls.propTypes = {
  children: PropTypes.node,
  onControlClick: PropTypes.func.isRequired,
};

export default GalleryControls;
