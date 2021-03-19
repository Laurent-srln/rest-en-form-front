import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo_small_dark.png';
import './styles.scss';

const Header = ({ isLogged, onClickLogout, role }) => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Logo REST'enforme" />
    {role === 'MEMBER' && (
      <nav className="header__nav">
        <NavLink
          to="/dashboard-member"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="/workout"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Entraînements</p>
        </NavLink>
        <NavLink
          to="/coachings"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Coachings</p>
        </NavLink>
      </nav>
    )}
    {role === 'COACH' && (
      <nav className="header__nav">
        <NavLink
          to="/dashboard-coach"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="/members"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Listing des adhérents</p>
        </NavLink>
      </nav>
    )}
    {role === 'OWNER' && (
      <nav className="header__nav">
        <NavLink
          to="/dashboard-manager"
          exact
          className="header__nav-link"
          activeClassName="header__nav-link--active"
        >
          <p>Accueil</p>
        </NavLink>
      </nav>
    )}

    {isLogged && (
      <div className="header__logout">
        <button
          className="header__logout-button"
          type="submit"
          onClick={onClickLogout}
        >
          Se déconnecter
        </button>
      </div>
    )}

  </header>
);

// == Props Validation
/*
Header.propTypes = {
  isLogged: PropTypes.string.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};
*/


// Header.propTypes = {};
export default Header;
