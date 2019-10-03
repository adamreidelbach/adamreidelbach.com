import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import useDarkMode from 'use-dark-mode';
import colors from '../utils/colors';

const PostPreview = ({ post }) => {
  const { value } = useDarkMode(false);

  return (
    <article
      css={css`
      border-bottom: 1px solid ${value ? colors.white : colors.black};
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
    >
      <Link
        to={post.slug}
        css={css`
        margin: 1rem 1rem 0 0;
        width: 300px;
      `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
          * {
            margin-top: 0;
          }
        `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>
          <Link
            to={post.slug}
            css={css`
              color: ${value ? colors.white : colors.black};
            `}
          >
            {post.title}
          </Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
};

export default PostPreview;
