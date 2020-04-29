import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function ClientInfo({ address, name }) {
  return (
    <S.Info>
      <S.Name>{name}</S.Name>
      <S.AddressWrapper>
        <S.AddressLabel>Endereço:</S.AddressLabel>
        <S.AddressLine>
          {address.street}, {address.suite}
        </S.AddressLine>
        <S.AddressLine>
          {address.city} - {address.zipcode}
        </S.AddressLine>
      </S.AddressWrapper>
    </S.Info>
  );
}

ClientInfo.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default ClientInfo;
