import React from 'react';
import Toggle from './toggle';
import styled from '@emotion/styled';

const DarkModeWrapper = styled('div')`
  margin-top: 0;
  & > button {
    font-size: 1rem;
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 375px) {
    & > button {
      font-size: 1.2rem;
    }
  }
`;

const DarkModeToggle = ({ isDarkMode, toggleDarkMode, componentMounted }) => {
  return (
    <DarkModeWrapper>
      <Toggle
        checked={isDarkMode}
        onChange={() => toggleDarkMode()}
        isDarkMode={isDarkMode}
        componentMounted={componentMounted}
      />
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;
