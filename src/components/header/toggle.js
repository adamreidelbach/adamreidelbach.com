import React from 'react';
import { css } from '@emotion/core';

const Toggle = ({ localTheme, componentMounted }) => {
  if (!componentMounted) {
    return <div />;
  }
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
        checked={localTheme === 'dark'}
        onChange={e =>
          window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
        }
        id="dmcheck"
      />
      <label htmlFor="dmcheck">{localTheme === 'dark' ? '☀' : '🌒'}</label>
    </span>
  );
};

export default Toggle;
