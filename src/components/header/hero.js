import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import Image from "gatsby-image";
import Twitter from '../../../images/twitter.svg';
import Github from '../../../images/github.svg';
import LinkedIn from '../../../images/linkedin.svg';
import TwitterWhite from '../../../images/twitter-white.svg';
import GithubWhite from '../../../images/github-white.svg';
import LinkedInWhite from '../../../images/linkedin-white.svg';

const HeroImg = styled(Image)`
  margin: 0 auto;
  max-width: 200px;
  border-radius: 2%;

  * {
    margin-top: 0;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { value: isDarkMode } = useDarkMode(false);

  return (
    <div>
      <HeroImg Tag="section" fluid={image.sharp.fluid} alt="Adam Reidelbach" />
      <div css={css`
        text-align: center;
        p {
          margin-top: 0;
        }
      `}>
        <p>Software Developer</p>
        <p>Austin, TX</p>
        <div css={css`
          margin-top: 0;
          padding-bottom: 1rem;

          img {
            margin: 1rem 0.5rem 0rem;
          }
        `}>
          <a href="https://twitter.com/adamreidelbach" target="_blank" rel="noopener noreferrer">
            <img src={isDarkMode ? TwitterWhite : Twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/adamreidelbach" target="_blank" rel="noopener noreferrer">
            <img src={isDarkMode ? GithubWhite : Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/adamreidelbach/" target="_blank" rel="noopener noreferrer">
            <img src={isDarkMode ? LinkedInWhite : LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
