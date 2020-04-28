import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function GalleryThumb({ active, title, url, onClick }) {
  return (
    <S.GalleryThumbItem>
      <S.GalleryThumbButton
        alt="Clique para visualizar"
        className={active && '--active'}
        title="Clique para visualizar"
        onClick={onClick}
      >
        <S.GalleryThumbImg alt={title} src={url} title={title} />
      </S.GalleryThumbButton>
    </S.GalleryThumbItem>
  );
}

GalleryThumb.defaultProps = { active: false };
GalleryThumb.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryThumb;
