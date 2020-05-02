import React from 'react';
import PropTypes from 'prop-types';

import { ClientContextProvider } from './clients.context';
import { LoaderContextProvider } from './loader.context';
import { PhotosContextProvider } from './photos.context';
import { PostsContextProvider } from './posts.context';

export default function AppContext({ children }) {
  return (
    <ClientContextProvider>
      <LoaderContextProvider>
        <PhotosContextProvider>
          <PostsContextProvider>{children}</PostsContextProvider>
        </PhotosContextProvider>
      </LoaderContextProvider>
    </ClientContextProvider>
  );
}
AppContext.propTypes = { children: PropTypes.node.isRequired };

export { useClients } from './clients.context';
export { useLoader } from './loader.context';
export { usePhotos } from './photos.context';
export { usePosts } from './posts.context';

export { CONTEXT_TOPIC as LoaderContextTopic } from './loader.context';
export { CONTEXT_TOPIC as ClientContextTopic } from './clients.context';
