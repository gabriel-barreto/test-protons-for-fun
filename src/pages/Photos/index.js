import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { $clients } from '../../services';
import { Gallery as GalleryFactory } from '../../stories/factories';

import {
  ClientDetails,
  ClientsList,
  Gallery,
  Layout,
  PageGrid,
} from '../../components';
import { useClients } from '../../contexts';

function PhotosPage() {
  const [activeClient, setActiveClient] = useState({});

  const { clients } = useClients();
  const { userId } = useParams();
  const history = useHistory();

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
    const { id: newUserId = 1 } = activeClient;
    history.push(`/${newUserId}/fotos`);
  }, [activeClient]);

  useEffect(() => {
    const { id: activeUserId = 1 } = activeClient;
    const intUserId = parseInt(userId, 10);

    if (intUserId && activeUserId !== intUserId) {
      const client = clients.find((each) => each.id === intUserId);
      setActiveClient(client);
    }
  }, [userId]);

  return (
    <Layout title="Fotos">
      <PageGrid>
        {Object.keys(activeClient || {}).length ? (
          <>
            <ClientsList clients={clients} />
            <ClientDetails client={activeClient}>
              <Gallery photos={GalleryFactory.list(11)} />
            </ClientDetails>
          </>
        ) : null}
      </PageGrid>
    </Layout>
  );
}

export default PhotosPage;
