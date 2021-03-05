// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <a className="footer__content-team" href="#">L'équipe</a>
      <span> - </span>
      <a className="footer__content-coachs" href=""> Les coachs</a>
      <span> - </span>
      <a className="footer__content-legalNotice" href=""> Mentions légales</a>
    </div>
  </footer>
);

// == Export
export default Footer;
