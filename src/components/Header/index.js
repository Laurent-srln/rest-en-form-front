import React from 'react';
// import PropTypes from 'prop-types';
import logo from './react-logo.svg';
import './styles.scss';

const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="Logo O'Sport" />
  </header>
);

// Header.propTypes = {};
export default Header;
