import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo_small.png';
import './styles.scss';

const Header = ({ isLogged, onClickLogout, role }) => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Logo REST'enforme" />
    {role === 'MEMBER' && (
      <nav className="header__nav">
        <NavLink
          to="/dashboard-member"
          exact
          className="menu-link"
          activeClassName="menu-link--active"
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="/workout"
          exact
          className="menu-link"
          activeClassName="menu-link--active"
        >
          <p>Entraînements</p>
        </NavLink>
        <NavLink
          to="/coachings"
          exact
          className="menu-link"
          activeClassName="menu-link--active"
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
          className="menu-link"
          activeClassName="menu-link--active"
        >
          <p>Accueil</p>
        </NavLink>
        <NavLink
          to="/members"
          exact
          className="menu-link"
          activeClassName="menu-link--active"
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
          className="menu-link"
          activeClassName="menu-link--active"
        >
          <p>Accueil</p>
        </NavLink>
      </nav>
    )}

    {isLogged && (
      <div className="header__logout">
        <button
          className="button"
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
