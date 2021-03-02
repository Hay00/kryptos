import React from 'react';
// Global Style
import GlobalStyles from './styles';

// Components
import Header from './components/Header';

// Pages
import MainPage from './pages/Main';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <MainPage />
    </div>
  );
}
