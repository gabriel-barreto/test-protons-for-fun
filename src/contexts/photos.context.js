import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = { owner: null, items: [] };
const PhotosContext = createContext(INITIAL_STATE);

export function PhotosContextProvider({ children }) {
  const [{ owner, items }, setPhotos] = useState(INITIAL_STATE);

  /**
   * Update photos context state
   *
   * @param {String} ownerId Photos owner ID
   * @param {Array} forcedItems=[] Forced values to items
   */
  const update = (ownerId, forcedItems = []) =>
    setPhotos((prev) => ({ ...prev, owner: ownerId, items: forcedItems }));

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
 * @typedef {Object} PhotosContextValues
 * @property {String} owner Photos owner ID
 * @property {Array} items Fetched photos
 * @property {Function} update Method to update values of state
 *
 * @returns {PhotosContextValues}
 */
export const usePhotos = () => {
  const { owner, items, update } = useContext(PhotosContext);
  return { owner, items, update };
};
