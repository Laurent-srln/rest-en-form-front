// == Import npm
import React from 'react';

// == Imports
import CoachingsAdh from 'src/components/CoachingsAdh';
import './style.scss';

// == Composant
const DashboardAd = () => (
  <div className="dashboardAd">Tableau de bord de l'adhérent
    <div>Réservation coaching
      <CoachingsAdh />
    </div>
    <div>Dernier training</div>
    <div>Suivi santé</div>
  </div>

);

// == Props Validation

// == Export
export default DashboardAd;
