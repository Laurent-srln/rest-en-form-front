// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Imports
// import Coachings from 'src/containers/Coachings';
// import Workouts from 'src/components/Workouts';

import './style.scss';

// == Composant
const DashboardAd = () => (
  <div className="dashboardAd">
    <h1>Tableau de bord de l'adhérent</h1>
    <div className="dashboardAd__coaching">
      <h2>Réservation coaching</h2>
      {/* <Coachings /> */}
      <p className="cta">
        <Link to="/booking-coaching" className="cta__text">Réserver un coaching</Link>
      </p>
      <p className="cta">
        <Link to="/coachings" className="cta__text">Voir toutes les réservations</Link>
      </p>
    </div>

    <div className="dashboardAd__workout">
      <h2>Dernier entraînement</h2>
      {/* <Workouts /> */}
      <p className="cta">
        <Link to="/add-workout" className="cta__text">Ajouter un entraînement</Link>
      </p>
      <p className="cta">
        <Link to="/workout" className="cta__text">Voir toutes les entraînements</Link>
      </p>
    </div>
    {/* <div>Suivi santé</div> */}
  </div>

);

// == Props Validation

// == Export
export default DashboardAd;
