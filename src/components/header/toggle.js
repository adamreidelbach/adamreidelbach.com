import React from 'react';
import { css } from '@emotion/core';
import useDarkMode from 'use-dark-mode';

const Toggle = ({ checked, onChange }) => {
  const { value: isDarkMode } = useDarkMode(false);

  return (
    <span
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 0;
      `}
    >
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck">{isDarkMode ? '☀' : '🌒'}</label>
    </span>
  )
};

export default Toggle;
