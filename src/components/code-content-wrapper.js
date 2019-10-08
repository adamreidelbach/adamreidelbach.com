import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import Code from './code';

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

const CodeContentWrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default CodeContentWrapper;
