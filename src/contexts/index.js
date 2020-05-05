import React from 'react';
import PropTypes from 'prop-types';

import { ActiveClientContextProvider } from './activeClient.context';
import { ClientContextProvider } from './clients.context';
import { LoaderContextProvider } from './loader.context';
import { PhotosContextProvider } from './photos.context';
import { PostsContextProvider } from './posts.context';

export default function AppContext({ children }) {
  return (
    <ActiveClientContextProvider>
      <ClientContextProvider>
        <LoaderContextProvider>
          <PhotosContextProvider>
            <PostsContextProvider>{children}</PostsContextProvider>
          </PhotosContextProvider>
        </LoaderContextProvider>
      </ClientContextProvider>
    </ActiveClientContextProvider>
  );
}
AppContext.propTypes = { children: PropTypes.node.isRequired };

export { useActiveClient } from './activeClient.context';
export { useClients } from './clients.context';
export { useLoader } from './loader.context';
export { usePhotos } from './photos.context';
export { usePosts } from './posts.context';
