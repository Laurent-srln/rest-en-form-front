// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const SelectTraining = () => (
  <div className="selectTraining">
    <label
      className="selectTraining__label"
      htmlFor="training-select"
    >
      Training effectués
      <select
        className="selectTraining__select"
        name="trainings"
        id="training-select"
      >
        <option value="">Sélectionner un training</option>
        <option value="vendredi 2 février">vendredi 2 février</option>
        <option value="mercredi 31 janvier">mercredi 31 janvier</option>
        <option value="lundi 24 janvier">lundi 24 janvier</option>
      </select>
    </label>
  </div>

);

// == Props Validation

// == Export
export default SelectTraining;
