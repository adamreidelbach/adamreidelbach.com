import React from 'react';
import { Global, css } from '@emotion/core';
import colors from '../utils/colors';
import Helmet from 'react-helmet';
import Header from './header/header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import CodeContentWrapper from './code-content-wrapper';

const Layout = ({ children, isDarkMode }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div
      css={css`
        min-width: 320px;
      `}
    >
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;
            background-color: ${isDarkMode ? colors.black : colors.white};
            color: ${isDarkMode ? colors.eggshell : colors.black};
            transition: background-color 0.5s ease;

            /* remove margin for the main div that Gatbsy mounts into */
            > div {
              margin-top: 0;
            }

            code {
              padding: 0.1rem 0.3rem 0;
              font-size: 0.85rem;
              border-radius: 0.3rem;
              padding: 0.15rem 0.2rem 0.05rem 0.2rem;
              background-color: ${isDarkMode ? colors.grey : colors.lightgrey};
              color: ${isDarkMode ? colors.offwhite : colors.black};
            }

            blockquote {
              border-left: calc(0.2vw + 2px) solid
                ${isDarkMode ? colors.black : colors.console};
              padding: 0.1% 6% 0.1% 4%;
              margin: 1.6rem 1vw;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Rubik', sans-serif;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          a {
            font-family: 'Rubik', sans-serif;
          }

          li {
            margin-top: 0.25rem;
          }

          input[type='checkbox'].dmcheck {
            position: relative;
            border-radius: 10px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
            vertical-align: 2px;
            outline: none;

            & + label {
              font-size: 1.25rem;
              margin-top: 0;
              display: inline-block;
              cursor: pointer;
              position: relative;

              @media (min-width: 575px) {
                font-size: 1.5rem;
              }
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          padding: 0 2rem;
          margin: 1rem auto;
          max-width: 900px;

          @media (min-width: 414px) {
            padding: 0 3rem;
          }
          @media (min-width: 600px) {
            padding: 0 4rem;
          }
          @media (min-width: 768px) {
            padding: 0 5rem;
          }
        `}
      >
        <CodeContentWrapper children={children} />
      </main>
    </div>
  );
};

export default Layout;
