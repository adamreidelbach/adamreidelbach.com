/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import ProjectPreview from '../components/project-preview';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import projects from '../projects.json';
import colors from '../utils/colors';
import useDarkMode from '../hooks/use-dark-mode';

export default () => {
  const posts = usePosts();
  // @todo - remove prop drilling and use context API
  const [isDarkMode, toggleDarkMode, componentMounted] = useDarkMode();

  return (
    <>
      <Layout
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        componentMounted={componentMounted}
      >
        <h2
          css={css`
            margin: 0 0 1rem 0;
          `}
        >
          Writing
        </h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} isDarkMode={isDarkMode} />
        ))}

        <hr
          css={css`
            border: 0;
            height: 1px;
            background: ${isDarkMode ? colors.white : colors.black};
          `}
        />

        <h2
          css={css`
            margin: 2rem 0 1rem 0;
          `}
        >
          Projects
        </h2>
        {projects.map(project => (
          <ProjectPreview
            key={project.title}
            project={project}
            isDarkMode={isDarkMode}
          />
        ))}
      </Layout>
    </>
  );
};
