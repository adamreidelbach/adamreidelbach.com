import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from '@emotion/styled';

const Pre = styled('pre')`
  overflow-x: auto;
  padding: 6%;
  font-size: 0.8rem;

  * {
    margin-top: 0;
  }
`;

const Code = ({ codeString, language }) => (
  <Highlight
    {...defaultProps}
    code={codeString}
    language={language}
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default Code;
