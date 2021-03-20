import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo_small_dark.png';
import './styles.scss';

const Header = ({ isLogged, onClickLogout, role }) => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Logo REST'enforme" />
    {role === 'MEMBER' && (
      <nav className="header__nav">
        <div className="header__nav-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            className="checkbox"
          />
          <label className="toggle" htmlFor="checkbox">&equiv; Menu</label>
          <ul className="menu">
            <li className="menu-item">
              <NavLink
                to="/dashboard-member"
                exact
                className="link"
                activeClassName="link--active"
              >
                Tableau de bord
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/workout"
                exact
                className="link"
                activeClassName="link--active"
              >
                Entraînements
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/coachings"
                exact
                className="link"
                activeClassName="link--active"
              >
                Coachings
              </NavLink>
            </li>
          </ul>
        </div>
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
