import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import colors from '../../utils/colors';

const NameTag = ({ isDarkMode }) => {
  return (
    <Link
      to="/"
      css={css`
        margin-top: 0;
        text-decoration: none;
      `}
    >
      <p
        css={css`
          font-size: 1.25rem;
          color: ${isDarkMode ? colors.white : colors.black};
          @media (min-width: 575px) {
            font-size: 1.5rem;
          }
        `}
      >
        Adam Reidelbach
      </p>
    </Link>
  );
};

export default NameTag;
