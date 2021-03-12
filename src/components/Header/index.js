import React from 'react';
// import PropTypes from 'prop-types';
import logo from './logo_small.png';
import './styles.scss';

const Header = ({ isLogged, onClickLogout }) => (
  <header className="header">
    <img className="header-logo" src={logo} alt="Logo O'Sport" />
    {isLogged && (
    <button
      className="add-training__form-submit"
      type="submit"
      onClick={onClickLogout}
    >
      Se déconnecter
    </button>
    )}
  </header>
);

// Header.propTypes = {};
export default Header;
