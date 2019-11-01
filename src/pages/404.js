/* eslint-disable react/display-name */
import React from 'react';
import ReadLink from '../components/read-link';
import Layout from '../components/layout';

export default () => {
  return (
    <>
      <Layout>
        <h1>Uh oh!</h1>
        <p>This page cannot be found.</p>
        <ReadLink to="/">&larr; back to home</ReadLink>
      </Layout>
    </>
  );
};
