import React from 'react';
import PropTypes from 'prop-types';

import PostCard from '../PostCard';

import * as S from './styled';

function PostsList({ posts }) {
  return (
    <S.List>
      {posts.map(({ body, id, title }) => (
        <S.Item key={id}>
          <PostCard body={body} title={title} />
        </S.Item>
      ))}
    </S.List>
  );
}

PostsList.defaultProps = { posts: [] };
PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      ...PostCard.propTypes,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PostsList;
