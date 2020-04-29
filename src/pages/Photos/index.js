import React from 'react';

import { Gallery as GalleryFactory, Client } from '../../stories/factories';

import ClientsList from '../../components/ClientsList';
import ClientDetails from '../../components/ClientDetails';
import Gallery from '../../components/Gallery';
import { Layout, PageGrid } from '../../components';

function PhotosPage() {
  return (
    <Layout title="Fotos">
      <PageGrid>
        <ClientsList clients={Client.list(16)} />
        <ClientDetails client={Client.single()}>
          <Gallery photos={GalleryFactory.list(11)} />
        </ClientDetails>
      </PageGrid>
    </Layout>
  );
}

export default PhotosPage;
