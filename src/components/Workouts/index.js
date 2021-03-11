// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports
import Workout from './Workout';
import './style.scss';

// == Composant
const Workouts = ({ workouts, getWorkouts }) => {
  useEffect(getWorkouts, []);

  {/* const filteredWorkouts = workouts.filter(workouts.date) */}

  return (
    <div className="workouts">
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
            {
              workouts.map((dateItem) => (
                <option value={dateItem.date} key={dateItem.date}>{dateItem.date}</option>
              ))
            }
          </select>
        </label>
      </div>
      <ul className="workouts__content">
        {workouts.map((workout) => <Workout key={workout.id} {...workout} />)}
      </ul>
      <p className="workouts__add"><Link to="/add-workout">+ Ajouter une séance d'entraînement</Link></p>
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
