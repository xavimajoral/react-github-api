import React from 'react';
import logo from '../../img/advanon-logo-white.png';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Frontend candidate: <a className="btn btn-success" href="http://www.xavi.website" target="_blank" role="button" rel="noopener noreferrer">Xavi Majoral</a></h3>
      </div>
    </header>
  );
}

export default Header;