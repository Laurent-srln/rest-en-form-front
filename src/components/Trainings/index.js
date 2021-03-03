// == Import npm
import React from 'react';

// == Imports
import Training from './Training';
import SelectTraining from './SelectTraining';
import './style.scss';

// == Composant
const Trainings = () => (
  <div className="trainings">
    <SelectTraining />
    <ul className="trainings__content">
      <Training />
      <Training />
      <Training />
    </ul>
    <p className="trainings__add"><a href="#">+ Ajouter un training</a></p>
  </div>
);

// == Props Validation

// == Export
export default Trainings;
