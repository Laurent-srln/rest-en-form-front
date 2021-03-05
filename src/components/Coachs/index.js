// == Import npm
import React from 'react';

// == Imports
import Coach from './Coach';
import './style.scss';

// == Composant
const Coachs = () => (
  <div className="coachs">
    <h1 className="coachs__title">Les coachs</h1>
    <div className="coachs__content">
      <Coach />
      <Coach />
      <Coach />
      <Coach />
      <Coach />
      <Coach />
      <Coach />
      <Coach />
      <Coach />
    </div>
    <a href="">
      <p className="coach__cta">+ Réserver un coaching</p>
      {/* <p className="coach__cta">Ajouter un coach</p> */}
    </a>
  </div>
);

// == Props Validation

// == Export
export default Coachs;
