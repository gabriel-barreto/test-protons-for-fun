import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Gallery,
  Layout,
  NotFoundIllustration,
  PageGrid,
} from '../../components';

import { usePhotos } from '../../contexts';

function PhotosPage() {
  const { photos, update: updatePhotos } = usePhotos();
  const { userId } = useParams();

  useEffect(() => {
    updatePhotos(userId);
  }, [userId]);

  return (
    <Layout title="Fotos">
      <PageGrid>
        {photos.length ? <Gallery photos={photos} /> : <NotFoundIllustration />}
      </PageGrid>
    </Layout>
  );
}

export default PhotosPage;
