// == Import npm
import React from 'react';

// == Imports
import CoachingsAdh from 'src/components/CoachingsAdh';
import './style.scss';

// == Composant
const DashboardAd = () => (
  <div className="dashboardAd">Tableau de bord de l'adhérent
    <div className="dashboardAd__coaching"> Réservation coaching
      <CoachingsAdh />
      <p>
        <a href="#">Réserver un coaching</a>
        <a href="#">Voir toutes les réservations</a>
      </p>
    </div>
    <div>Dernier training</div>
    <div>Suivi santé</div>
  </div>

);

// == Props Validation

// == Export
export default DashboardAd;
