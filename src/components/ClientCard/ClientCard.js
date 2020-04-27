import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function ClientCard({ active, company, email, id, name }) {
  return (
    <S.ClientCardWrapper className={active && '--active'} to={`${id}/fotos`}>
      <S.ClientCardTitle>{name}</S.ClientCardTitle>
      <S.ClientCardInfo>{email}</S.ClientCardInfo>
      <S.ClientCardInfo>{company}</S.ClientCardInfo>
    </S.ClientCardWrapper>
  );
}

ClientCard.defaultProps = { active: false };
ClientCard.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ClientCard;
