import React from 'react';

import { Client, Post } from '../../stories/factories';

import { Layout, PageGrid } from '../../components';
import ClientDetails from '../../components/ClientDetails';
import PostsList from '../../components/PostsList';
import ClientsList from '../../components/ClientsList';

function PostsPage() {
  return (
    <Layout title="Posts">
      <PageGrid>
        <ClientsList clients={Client.list(8)} />
        <ClientDetails client={Client.single()}>
          <PostsList posts={Post.list(24)} />
        </ClientDetails>
      </PageGrid>
    </Layout>
  );
}

export default PostsPage;
