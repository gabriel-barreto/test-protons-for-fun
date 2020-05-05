import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { $posts } from '../services';

const INITIAL_STATE = { owner: 0, items: [] };
const PostsContext = createContext(INITIAL_STATE);

export function PostsContextProvider({ children }) {
  const [{ owner, items }, setPosts] = useState(INITIAL_STATE);

  /**
   * Update posts context state
   *
   * @param {string|number} rawOwnerId Posts owner ID
   */
  const update = (rawOwnerId) => {
    const ownerId = parseInt(rawOwnerId, 10);
    if (owner !== ownerId) {
      $posts
        .fetchAllByUser(ownerId)
        .then((payload) =>
          setPosts((prev) => ({ ...prev, owner: ownerId, items: payload })),
        );
    }
  };

  return (
    <PostsContext.Provider value={{ owner, posts: items, update }}>
      {children}
    </PostsContext.Provider>
  );
}
PostsContextProvider.propTypes = { children: PropTypes.node.isRequired };

/**
 * Return the posts context provider
 *
 * @typedef {object} PostsContextValues
 * @property {string|number} owner Posts owner ID
 * @property {array<object>} posts List of posts of user
 * @property {function} update Method to update values of context
 *
 * @returns {PostsContextValues}
 */
export const usePosts = () => {
  const { owner, posts, update } = useContext(PostsContext);
  return { owner, posts, update };
};
