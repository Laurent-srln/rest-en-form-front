// == Import npm
import React from 'react';

// == Imports
import Coaching from './Coaching';
import './style.scss';

// == Composant
const Coachings = () => (
  <div className="coachings">
    <h1 className="coachings__title">Prochains coachings</h1>
    <ul className="coachings__list">
      <Coaching />
      <Coaching />
      <Coaching />
    </ul>
    <a href="">
      <p className="coachings__cta">+ Réserver un coaching</p>
    </a>
  </div>
);

// == Props Validation

// == Export
export default Coachings;
