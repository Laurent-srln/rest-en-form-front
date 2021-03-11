// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const SelectWorkout = () => (
  <div className="selectWorkout">
    <label
      className="selectWorkout__label"
      htmlFor="workout-select"
    >
      Training effectués
      <select
        className="selectWorkout__select"
        name="workouts"
        id="workout-select"
      >
        <option value="">Sélectionner une date</option>
        <option value="vendredi 2 février">vendredi 2 février</option>
        <option value="mercredi 31 janvier">mercredi 31 janvier</option>
        <option value="lundi 24 janvier">lundi 24 janvier</option>
      </select>
    </label>
  </div>

);

// == Props Validation

// == Export
export default SelectWorkout;
