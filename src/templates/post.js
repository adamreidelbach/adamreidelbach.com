import React from 'react';
import useDarkMode from '../hooks/use-dark-mode';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import styled from '@emotion/styled';
import colors from '../utils/colors';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  // @todo - remove prop drilling and use context API
  const [isDarkMode, toggleDarkMode, componentMounted] = useDarkMode();

  const BlogWrapper = styled('div')`
    a {
      color: ${isDarkMode ? colors.lightblue : colors.blue};
    }
  `;

  return (
    <Layout
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
      componentMounted={componentMounted}
    >
      <BlogWrapper>
        <h1
          css={css`
            text-align: center;
            margin-bottom: 2rem;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to home</ReadLink>
      </BlogWrapper>
    </Layout>
  );
};

export default PostTemplate;
