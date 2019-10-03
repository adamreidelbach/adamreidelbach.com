import React from 'react';
import ProjectPreview from '../components/project-preview';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Layout>
        <h2>Writing</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <h2>Projects</h2>
        <ProjectPreview />
      </Layout>
    </>
  );
};
