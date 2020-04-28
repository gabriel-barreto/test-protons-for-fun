import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ChevronLeft } from 'styled-icons/material';

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
      <S.GalleryControls>
        <S.GalleryControlButton
          alt="Fotos Anteriores"
          title="Fotos Anteriores"
          type="button"
          onClick={() => console.log('Prev photos page')}
        >
          <ChevronLeft size={32} />
        </S.GalleryControlButton>

        <S.GalleryThumbs>
          {photos.map(({ thumbnailUrl, title, id }) => (
            <S.GalleryThumbItem key={id}>
              <S.GalleryThumbButton
                alt="Clique para visualizar"
                className={id === active.id && '--active'}
                title="Clique para visualizar"
                onClick={() => onThumbClickHandler(id)}
              >
                <S.GalleryThumbImg
                  alt={title}
                  src={thumbnailUrl}
                  title={title}
                />
              </S.GalleryThumbButton>
            </S.GalleryThumbItem>
          ))}
        </S.GalleryThumbs>

        <S.GalleryControlButton
          alt="Próximas Fotos"
          title="Próximas Fotos"
          type="button"
          onClick={() => console.log('Next photos page')}
        >
          <ChevronLeft size={32} />
        </S.GalleryControlButton>
      </S.GalleryControls>
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
