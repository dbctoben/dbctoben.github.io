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
import { useTranslation } from 'react-i18next';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';

function App() {
  const links = [
    { to: '/', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'search', label: 'Search' },
    { to: 'error', label: 'Error' },
  ];

  const { i18n } = useTranslation();

  document.body.dir = i18n.dir();

  return (
    <ThemeProvider theme={noTextTransformButton}>
      <BrowserRouter>
        <Header links={links} />
        <Routes>
          <Route path='/' index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='search' element={<SearchResultsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
