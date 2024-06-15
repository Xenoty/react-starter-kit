import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './app/navigation/Navbar';
import { NavbarProvider } from './app/navigation/NavbarContext';
import routes from './app/navigation/routes';
import HomePage from './app/features/home/HomePage';
import ExamplePage from './app/features/example/ExamplePage';
import { HelmetProvider } from 'react-helmet-async';
import FontsHeader from './app/components/headers/Fonts';
import ProductsPage from './app/features/products/ProductsPage';

function App() {
  return (
    <>
      <HelmetProvider>
        <FontsHeader />
        <BrowserRouter>
          <NavbarProvider>
            <NavigationBar />
          </NavbarProvider>
          <Routes>
            <Route path={routes.home.to} element={<HomePage />} />
            <Route path={routes.example.to} element={<ExamplePage />} />
            <Route path={routes.products.to} element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
