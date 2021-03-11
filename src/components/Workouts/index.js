// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
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
        {workouts.map((workout) => <Workout key={workout.id} {...workout} />)}
      </ul>
      <p className="workout__add"><Link to="/add-workout">+ Ajouter une séance d'entraînement</Link></p>
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
