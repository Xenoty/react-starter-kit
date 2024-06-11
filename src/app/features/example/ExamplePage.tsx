import React from 'react';
import { Container } from 'react-bootstrap';
import SEO from '../../components/headers/Seo';
import seoData from './seo.json';
import config from '../../../config/config';

const ExamplePage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Container className="text-center">
        <h1>This is an Example Page</h1>
        <h2>Secret from ENV: {config.SecretKey}</h2>
      </Container>
    </>
  );
};

export default ExamplePage;
