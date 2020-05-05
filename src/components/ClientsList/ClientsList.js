import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styled';

import ClientCard from '../ClientCard';

function ClientsList({ className, clients }) {
  const { userId = '0' } = useParams();

  return (
    <S.List className={className}>
      {clients.map(({ company, email, id, name }) => (
        <S.Item key={id}>
          <ClientCard
            active={id === parseInt(userId, 10)}
            company={company}
            email={email}
            id={id}
            name={name}
          />
        </S.Item>
      ))}
    </S.List>
  );
}

ClientsList.defaultProps = { className: '', clients: [] };
ClientsList.propTypes = {
  className: '',
  clients: PropTypes.arrayOf(PropTypes.shape(ClientCard.propTypes)),
};

export default ClientsList;
