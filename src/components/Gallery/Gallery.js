import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import Thumb from './Thumb';

import * as S from './styled';

function Gallery({ photos }) {
  const [active, setActive] = useState({
    id: '',
    title: '',
    url: '',
  });

  function onThumbClickHandler(photoId) {
    const { title, url } = photos.find(({ id }) => id === photoId);
    setActive({ id: photoId, title, url });
  }

  function onControlClickHandler(action) {
    console.log(action);
  }

  useEffect(() => {
    if (photos.length && !active.url) {
      const { id, title, url } = photos[0];
      setActive({ id, title, url });
    }
  }, [photos]);

  return (
    <S.GalleryGrid>
      <S.GalleryActivePhoto
        alt={active.title}
        src={active.url}
        title={active.title}
      />

      <Controls onControlClick={onControlClickHandler}>
        {photos.map(({ id, thumbnailUrl, title }) => (
          <Thumb
            active={id === active.id}
            id={id}
            title={title}
            url={thumbnailUrl}
            onClick={() => onThumbClickHandler(id)}
          />
        ))}
      </Controls>
    </S.GalleryGrid>
  );
}

Gallery.defaultProps = { photos: [] };
Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default Gallery;
