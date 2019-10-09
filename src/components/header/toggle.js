import React from 'react';
import { css } from '@emotion/core';

const Toggle = ({ checked, onChange, isDarkMode }) => {
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
