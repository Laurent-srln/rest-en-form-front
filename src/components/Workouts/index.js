// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports
import Workout from './Workout';
import SelectWorkout from './SelectWorkout';
import './style.scss';

// == Composant
const Workouts = ({ workouts, getWorkouts }) => {
  useEffect(getWorkouts, []);

  return (
    <div className="workout">
      <SelectWorkout date={date} />
      <ul className="workout__content">
        {workouts.map((workout) => <Workout key={workout.id} {...workout} />)}
      </ul>
      <p className="workout__add"><Link to="/add-workout">+ Ajouter une séance d'entraînement</Link></p>
    </div>
  );
};

// == Props Validation

Workouts.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getWorkouts: PropTypes.func.isRequired,
};

// == Export
export default Workouts;
