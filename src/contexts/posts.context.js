import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = { owner: null, items: [] };
const PostsContext = createContext(INITIAL_STATE);

export function PostsContextProvider({ children }) {
  const [{ owner, items }, setPosts] = useState(INITIAL_STATE);

  /**
   * Update posts context state
   *
   * @param {String} ownerId Posts owner ID
   * @param {Array} forcedItems=[] Forced values to items
   */
  const update = (ownerId, forcedItems = []) =>
    setPosts((prev) => ({ ...prev, owner: ownerId, items: forcedItems }));

  return (
    <PostsContext.Provider value={{ owner, items, update }}>
      {children}
    </PostsContext.Provider>
  );
}
PostsContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Return the posts context provider
 *
 * @typedef {Object} PostsContextValues
 * @property {String} owner Posts owner ID
 * @property {Array} items List of posts of user
 * @property {Function} update Method to update values of context
 *
 * @returns {PostsContextValues}
 */
export const usePosts = () => {
  const { owner, items, update } = useContext(PostsContext);
  return { owner, items, update };
};
