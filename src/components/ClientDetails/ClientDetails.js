import React from 'react';
import PropTypes from 'prop-types';

import ClientInfo from '../ClientInfo';

import * as S from './styled';

function ClientDetails({ client, children }) {
  return (
    <S.Grid>
      <ClientInfo address={client.address} name={client.name} />
      {children}
    </S.Grid>
  );
}

ClientDetails.defaultProps = { client: {}, children: null };
ClientDetails.propTypes = {
  client: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default ClientDetails;
