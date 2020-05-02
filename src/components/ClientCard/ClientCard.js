import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function ClientCard({ active, company, email, id, name }) {
  return (
    <S.Card className={active && '--active'} to={`/${id}/fotos`}>
      <S.Title>{name}</S.Title>
      <S.Info>{email}</S.Info>
      <S.Info>{company}</S.Info>
    </S.Card>
  );
}

ClientCard.defaultProps = { active: false };
ClientCard.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  company: PropTypes.string.isRequired,
};

export default ClientCard;
