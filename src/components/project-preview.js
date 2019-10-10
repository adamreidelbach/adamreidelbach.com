import React from 'react';
import { css } from '@emotion/core';
import colors from '../utils/colors';

const ProjectPreview = ({ project, isDarkMode }) => {
  return (
    <article
      css={css`
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;

        :last-of-type {
          padding-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <h3>
          <a
            href={project.url}
            css={css`
              color: ${isDarkMode ? colors.white : colors.black};
            `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectPreview;
