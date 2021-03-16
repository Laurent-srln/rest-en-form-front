// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Footer = ({ isLogged }) => (
  <footer className="footer">
    <div className="footer__content">
      <Link to="/team" className="footer__content-team">L'équipe</Link>
      <span> - </span>
      {isLogged && (
        <div>
          <Link to="/coachs" className="footer__content-coachs">Les coachs</Link>
          <span> - </span>
        </div>
      )}
      <Link to="/legal-notice" className="footer__content-legalNotice">Mentions légales</Link>
    </div>
  </footer>
);

// == Props Validation
/*
Footer.propTypes = {
  isLogged: PropTypes.string.isRequired,
};
*/

// == Export
export default Footer;
