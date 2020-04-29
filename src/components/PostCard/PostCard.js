import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function PostCard({ title, body }) {
  return (
    <S.PostCardWrapper>
      <S.PostCardTitle>{title}</S.PostCardTitle>
      <S.PostCardContent>{body}</S.PostCardContent>
    </S.PostCardWrapper>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
