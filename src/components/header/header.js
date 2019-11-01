import React from 'react';
import Hero from './hero';
import DarkModeToggle from './dark-mode-toggle';
import NameTag from './name-tag';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Match } from '@reach/router';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const PrimaryHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondaryHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InnerHeader = styled('div')`
  display: flex;
  align-items: center;

  p {
    font-size: 1rem;
    margin-left: 0.5rem;

    @media (min-width: 350px) {
      font-size: 1.15rem;
    }

    @media (min-width: 414px) {
      font-size: 1.25rem;
      margin-left: 1rem;
    }
  }
`;

const HeroImg = styled(Image)`
  img {
    margin: 0 auto;
    border-radius: 50%;
  }
`;

const Header = ({ isDarkMode, toggleDarkMode, componentMounted }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        css={css`
          margin: 0 auto;
          max-width: 900px;
          padding: 1.5 2rem 2rem;

          @media (min-width: 414px) {
            padding: 1.5rem 3rem 2rem;
          }
          @media (min-width: 600px) {
            padding: 1.5rem 4rem 2rem;
          }
          @media (min-width: 768px) {
            padding: 1.5rem 5rem 2rem;
          }
        `}
      >
        <Match path="/">
          {props =>
            props.match ? (
              <PrimaryHeader>
                <NameTag isDarkMode={isDarkMode} />
                <DarkModeToggle
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  componentMounted={componentMounted}
                />
              </PrimaryHeader>
            ) : (
              <SecondaryHeader>
                <InnerHeader>
                  <Link
                    to="/"
                    css={css`
                      height: 60px;
                    `}
                  >
                    <HeroImg
                      Tag="section"
                      fixed={image.sharp.fixed}
                      alt="Adam Reidelbach"
                    />
                  </Link>
                  <NameTag isDarkMode={isDarkMode} />
                </InnerHeader>
                <DarkModeToggle
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  componentMounted={componentMounted}
                />
              </SecondaryHeader>
            )
          }
        </Match>
      </div>
      <Match path="/">
        {props => (props.match ? <Hero isDarkMode={isDarkMode} /> : null)}
      </Match>
    </>
  );
};

export default Header;
