import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { ThemeProvider } from '@mui/material';
import { noTextTransformButton } from './services/themes';

function App() {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'error', label: 'Error' },
  ];

  return (
    <ThemeProvider theme={noTextTransformButton}>
      <BrowserRouter>
        <Header links={links} />
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
