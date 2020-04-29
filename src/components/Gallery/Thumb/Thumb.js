import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function GalleryThumb({ active, title, url, onClick }) {
  return (
    <S.ThumbItem>
      <S.ThumbButton
        alt="Clique para visualizar"
        className={active && '--active'}
        title="Clique para visualizar"
        onClick={onClick}
      >
        <S.ThumbImg alt={title} src={url} title={title} />
      </S.ThumbButton>
    </S.ThumbItem>
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
