import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { $photos } from '../services';

const INITIAL_STATE = { owner: 0, items: [] };
const PhotosContext = createContext(INITIAL_STATE);

export function PhotosContextProvider({ children }) {
  const [{ owner, items }, setStore] = useState(INITIAL_STATE);

  function update(rawOwnerId) {
    const ownerId = parseInt(rawOwnerId, 10);
    if (owner !== ownerId) {
      $photos
        .fetchAllByUser(ownerId)
        .then((payload) =>
          setStore((prev) => ({ ...prev, owner: ownerId, items: payload })),
        );
    }
  }

  return (
    <PhotosContext.Provider value={{ owner, photos: items, update }}>
      {children}
    </PhotosContext.Provider>
  );
}
PhotosContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Returns the photos context exposed values
 *
 * @typedef {object} PhotosContextValues
 * @property {number|string} owner Photos owner ID
 * @property {array} photos Stored photos
 * @property {function} update Update context values
 *
 * @returns {PhotosContextValues}
 */
export const usePhotos = () => {
  const { owner, photos, update } = useContext(PhotosContext);
  return { owner, photos, update };
};
