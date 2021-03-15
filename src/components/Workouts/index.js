// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Imports
import Workout from './Workout';
import './style.scss';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Workouts = ({ workouts, getWorkouts }) => {
  useEffect(getWorkouts, []);

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
                <option value={dateItem.date} key={dateItem.id}>{dayjs(dateItem.date).tz('Europe/Paris').locale('fr').format('dddd DD MMMM')}
                </option>
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
