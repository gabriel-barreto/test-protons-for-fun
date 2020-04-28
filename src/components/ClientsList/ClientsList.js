import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styled';

import ClientCard from '../ClientCard';

function ClientsList({ clients }) {
  const { userId: currentUserId = 0 } = useParams();

  return (
    <S.ClientsListWrapper>
      {clients.map(({ company, email, id, name }) => (
        <S.ClientListItem key={id}>
          <ClientCard
            active={id === currentUserId}
            company={company}
            email={email}
            id={id}
            name={name}
          />
        </S.ClientListItem>
      ))}
    </S.ClientsListWrapper>
  );
}

ClientsList.defaultProps = { clients: [] };
ClientsList.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape(ClientCard.propTypes)),
};

export default ClientsList;
