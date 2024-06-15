import React from 'react';
import logo from '../../assets/logo.svg';
import './HomePage.scss';
import SEO from '../../components/headers/Seo';
import seoData from './seo.json'; // Import the SEO data

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <SEO {...seoData} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HomePage;
