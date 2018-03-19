import React from 'react';
import logo from '../images/logo-beatle.png';
import '../css/Header.css';


const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">App Beatles</h1>
  </header>
);

export default Header;