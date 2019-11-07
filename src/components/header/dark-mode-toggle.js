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

const DarkModeToggle = ({ localTheme, componentMounted }) => {
  return (
    <DarkModeWrapper>
      <Toggle localTheme={localTheme} componentMounted={componentMounted} />
    </DarkModeWrapper>
  );
};

export default DarkModeToggle;
