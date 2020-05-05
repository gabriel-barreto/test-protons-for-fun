import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useActiveClient, useClients } from '../../contexts';
import { $clients } from '../../services';

import { ClientDetails } from '../index';

import * as S from './styled';

function PageGrid({ children }) {
  const { current: activeClient, setActiveClient } = useActiveClient();
  const { clients } = useClients();
  const { userId } = useParams();

  useEffect(() => {
    if (!clients.length) $clients.fetchAll();
  }, []);

  useEffect(() => {
    let [active] = clients;
    const found = clients.find((client) => client.id === userId);
    if (found) active = found;

    if (Object.keys(active || {}).length) setActiveClient(active);
  }, [clients]);

  useEffect(() => {
    const { id: activeUserId = 1 } = activeClient;
    const intUserId = parseInt(userId, 10);

    if (intUserId && activeUserId !== intUserId) {
      const client = clients.find((each) => each.id === intUserId);
      setActiveClient(client);
    }
  }, [userId]);

  return (
    <S.Grid>
      <S.Clients clients={clients} />
      {Object.keys(activeClient).length ? (
        <ClientDetails client={activeClient}>{children}</ClientDetails>
      ) : null}
    </S.Grid>
  );
}

PageGrid.defaultProps = { children: null };
PageGrid.propTypes = { children: PropTypes.node };

export default PageGrid;
