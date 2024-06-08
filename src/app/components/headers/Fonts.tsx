import React from 'react';
import { Helmet } from 'react-helmet-async';

const FontsHeader = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontsHeader;
