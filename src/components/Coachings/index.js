// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import Coaching from 'src/components/Coachings/Coaching';
import { Link } from 'react-router-dom';
// import Coaching from 'src/containers/Coachings/Coaching';

import './style.scss';

// == Composant
const Coachings = ({ coachings, getCoachings }) => {
  useEffect(getCoachings, []);

  return (
    <div className="coachings">
      <h1 className="coachings__title">Prochains coachings</h1>
      <div className="coachings__content">
        {coachings.map((coaching) => <Coaching key={coaching.id} {...coaching} />)}
      </div>
      <p className="coachings__cta">
        <Link to="/booking-coaching">+ Réserver un coaching</Link>
      </p>
    </div>
  );
};

// == Props Validation
Coachings.propTypes = {
  coachings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  getCoachings: PropTypes.func.isRequired,
};

// == Export
export default Coachings;
