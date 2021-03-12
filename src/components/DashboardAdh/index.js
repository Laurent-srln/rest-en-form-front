// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Imports
// import Coachings from 'src/containers/Coachings';
// import Workouts from 'src/components/Workouts';
import HealthCheck from 'src/components/HealthCheck';

import './style.scss';

// == Composant
const DashboardAd = ({ healthCheck, getHealthCheck }) => {
  useEffect(getHealthCheck, []);

  return (
    <div className="dashboardMember">
      <h1>Tableau de bord de l'adhérent</h1>
      <div className="dashboardMember__coaching">
        <h2>Réservation coaching</h2>
        {/* <Coachings /> */}
        <p className="cta">
          <Link to="/booking-coaching" className="cta__text">Réserver un coaching</Link>
        </p>
        <p className="cta">
          <Link to="/coachings" className="cta__text">Voir toutes les réservations</Link>
        </p>
      </div>

      <div className="dashboardMember__workout">
        <h2>Dernier entraînement</h2>
        {/* <Workouts /> */}
        <p className="cta">
          <Link to="/add-workout" className="cta__text">Ajouter un entraînement</Link>
        </p>
        <p className="cta">
          <Link to="/workout" className="cta__text">Voir toutes les entraînements</Link>
        </p>
      </div>
      <div className="dashboardMember__healthData">
        {healthCheck.map((data) => <HealthCheck key={data.id} {...data} />)}

      </div>
    </div>
  );
};

// == Props Validation
DashboardAd.propTypes = {
  healthCheck: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  getHealthCheck: PropTypes.func.isRequired,
};

// == Export
export default DashboardAd;
