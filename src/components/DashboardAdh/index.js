// == Import npm
import React from 'react';

// == Imports
import Trainings from 'src/components/Trainings';
import './style.scss';

// == Composant
const DashboardAd = () => (
  <div className="dashboardAd">Tableau de bord de l'adhérent
    <div>Réservation coaching
      <Trainings />
    </div>
    <div>Dernier training</div>
    <div>Suivi santé</div>
  </div>

);

// == Props Validation

// == Export
export default DashboardAd;
