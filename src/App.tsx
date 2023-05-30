import React from 'react';
import './App.css'

// layout
import Header from './layout/Header';
import Footer from './layout/Footer';
// components
import NotificationBar from './components/NotificationBar';
import Catalog from './components/Catalog';

const App: React.FC = () => {
  return (
    <>
      <NotificationBar/>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
};

export default App;