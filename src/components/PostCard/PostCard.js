import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function PostCard({ title, body }) {
  return (
    <S.PostCard>
      <S.Title>{title}</S.Title>
      <S.Body>{body}</S.Body>
    </S.PostCard>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
