// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import Coaching from 'src/components/Coachings/Coaching';
// import Coaching from 'src/containers/Coachings/Coaching';

import './style.scss';

// == Composant
const Coachings = ({ coachings }) => (
  <div className="coachings">
    <h1 className="coachings__title">Prochains coachings</h1>
    <div className="coachings__content">
      {coachings.map((coaching) => <Coaching key={coaching.id} {...coaching} />)}
    </div>
    <a href="">
      <p className="coachings__cta">+ Réserver un coaching</p>
    </a>
  </div>
);

// == Props Validation
Coachings.propTypes = {
  coachings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

// == Export
export default Coachings;
