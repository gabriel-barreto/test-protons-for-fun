import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { $clients } from '../../services';

import {
  ClientDetails,
  ClientsList,
  Gallery,
  Layout,
  NotFoundIllustration,
  PageGrid,
} from '../../components';

import { useClients, usePhotos } from '../../contexts';

function PhotosPage() {
  const { clients } = useClients();
  const history = useHistory();
  const { userId } = useParams();
  const { photos, update: updatePhotos } = usePhotos();

  const [activeClient, setActiveClient] = useState({});

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

    updatePhotos(newUserId);
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
              {photos.length ? (
                <Gallery photos={photos} />
              ) : (
                <NotFoundIllustration />
              )}
            </ClientDetails>
          </>
        ) : null}
      </PageGrid>
    </Layout>
  );
}

export default PhotosPage;
