import React from 'react';
import Hero from './hero';
import DarkModeToggle from './dark-mode-toggle';
import NameTag from './name-tag';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Match } from '@reach/router';
import { Link } from 'gatsby';
import Image from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby';
import colors from '../../utils/colors';
import useDarkMode from 'use-dark-mode';

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

    @media(min-width: 350px) {
      font-size: 1.15rem;
    }

    @media(min-width: 414px) {
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

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fixed(width:60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { value } = useDarkMode(false);

  const Header = styled('header')`
    background-color: ${value ? colors.black : colors.eggshell};
    padding: 0.5rem 2rem;

    @media(min-width: 414px) {
      padding: 0.5rem 3rem;
    }
    @media(min-width: 600px) {
      padding: 0.5rem 4rem;
    }
    @media(min-width: 768px) {
      padding: 0.5rem 5rem;
    }
  `;

  return (
    <Header>
      <div css={css`
        max-width: 650px;
        margin: 0 auto;
      `}>
        <Match path="/">
          {props =>
            props.match ? (
              <PrimaryHeader>
                <NameTag />
                <DarkModeToggle />
              </PrimaryHeader>
            ) : (
                <SecondaryHeader>
                  <InnerHeader>
                    <Link to="/" css={css`
                      height: 60px;
                    `}>
                      <HeroImg Tag="section" fixed={image.sharp.fixed} alt="Adam Reidelbach" />
                    </Link>
                    <NameTag />
                  </InnerHeader>
                  <DarkModeToggle />
                </SecondaryHeader>
              )}
        </Match>
      </div>
      <Match path="/">
        {props =>
          props.match ? (
            <Hero />
          ) : (
              null
            )
        }
      </Match>
    </Header>
  );
};

export default Header;
