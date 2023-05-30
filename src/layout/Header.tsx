import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <img className='logo' src="/logo-web.png" alt='Logo' />
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Header;
