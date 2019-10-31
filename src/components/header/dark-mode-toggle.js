import React from 'react';
import Toggle from './toggle';
import useDarkMode from 'use-dark-mode';
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

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeWrapper>
      <Toggle
        checked={darkMode.value}
        onChange={darkMode.toggle}
        isDarkMode={darkMode.value}
      />
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;
