// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Imports
// import CoachingsAdh from 'src/components/CoachingsAdh';
// import Trainings from 'src/components/Trainings';

import './style.scss';

// == Composant
const DashboardAd = () => (
  <div className="dashboardAd">Tableau de bord de l'adhérent
    <div className="dashboardAd__coaching"> Réservation coaching
      {/* <CoachingsAdh /> */}
      <p>
        <Link to="/booking-coaching">Réserver un coaching</Link>
        <Link to="/coachings">Voir toutes les réservations</Link>
      </p>
    </div>
    {/* <div>Dernier training
      <Trainings />
    </div> */}
    {/* <div>Suivi santé</div> */}
  </div>

);

// == Props Validation

// == Export
export default DashboardAd;
