import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import useDarkMode from 'use-dark-mode';

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
  const { value: isDarkMode } = useDarkMode(false);

  const BlogWrapper = styled('div')`
    a {
      color: ${isDarkMode ? colors.lightblue : colors.blue};
    }
  `;

  return (
    <Layout>
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
