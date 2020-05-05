import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePosts } from '../../contexts';

import { Layout, NotFoundIllustration, PageGrid } from '../../components';
import PostsList from '../../components/PostsList';

function PostsPage() {
  const { posts, update: updatePosts } = usePosts();
  const { userId } = useParams();

  useEffect(() => {
    updatePosts(userId);
  }, [userId]);

  return (
    <Layout title="Posts">
      <PageGrid>
        {posts.length ? <PostsList posts={posts} /> : <NotFoundIllustration />}
      </PageGrid>
    </Layout>
  );
}

export default PostsPage;
