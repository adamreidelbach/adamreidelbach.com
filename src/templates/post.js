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
  const { value } = useDarkMode(false);

  const BlogWrapper = styled('div')`
    a {
      color: ${value ? colors.lightblue : colors.blue}
    }
  `;

  return (
    <Layout>
      <BlogWrapper>
        <div
          css={css`
        text-align: center;
      `}
        >
          <h1>{post.frontmatter.title}</h1>
          <p
            css={css`
          font-size: 0.75rem;
        `}
          >
            Posted by {post.frontmatter.author}
          </p>
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to home</ReadLink>
      </BlogWrapper>
    </Layout>
  )
};

export default PostTemplate;
