import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import Thumb from './Thumb';

import * as S from './styled';

const INITIAL_STATE = { id: '', title: '', url: '' };
function Gallery({ photos }) {
  const [active, setActive] = useState({ ...INITIAL_STATE });
  const [page, setPage] = useState({ actual: 1, total: 1 });

  function onThumbClickHandler(photoId) {
    const { title, url } = photos.find(({ id }) => id === photoId);
    setActive({ id: photoId, title, url });
  }

  function onControlClickHandler(action) {
    const { actual, total } = page;

    if (action === 'prev') {
      if (actual === 1) return setPage((prev) => ({ ...prev, actual: total }));
      return setPage((prev) => ({ ...prev, actual: actual - 1 }));
    }

    if (actual === total) return setPage((prev) => ({ ...prev, actual: 1 }));
    return setPage((prev) => ({ ...prev, actual: actual + 1 }));
  }

  useEffect(() => {
    if (photos.length) {
      if (!active.url) {
        const { id, title, url } = photos[0];
        setActive({ id, title, url });
      }

      setPage({ actual: 1, total: Math.ceil(photos.length / 4) });
    }
  }, [photos]);

  return (
    <S.Grid>
      <S.ActivePhoto alt={active.title} src={active.url} title={active.title} />

      <Controls onControlClick={onControlClickHandler}>
        {photos
          .slice((page.actual - 1) * 4, page.actual * 4)
          .map(({ id, thumbnailUrl, title }) => (
            <Thumb
              active={id === active.id}
              id={id}
              key={id}
              title={title}
              url={thumbnailUrl}
              onClick={() => onThumbClickHandler(id)}
            />
          ))}
      </Controls>
    </S.Grid>
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
