// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import Workout from './Workout';
import SelectWorkout from './SelectWorkout';
import './style.scss';

// == Composant
const Workouts = ({ workouts, getworkouts}) => {
  // useEffect(getWorkouts, []);
  console.log('workout', workouts);

  return (
    <div className="workout">
      <SelectWorkout />
      <ul className="workout__content">
        <Workout />
        <Workout />
        <Workout />
      </ul>
      <p className="workout__add"><a href="#">+ Ajouter une séance d'entraînement</a></p>
    </div>
  );
};

// == Props Validation
/*
Workouts.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  getWorkings: PropTypes.func.isRequired,
};
*/

// == Export
export default Workouts;
