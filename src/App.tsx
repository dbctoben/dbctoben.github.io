import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'error', label: 'Error' },
  ];

  return (
    <BrowserRouter>
      <Header links={links} />
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
