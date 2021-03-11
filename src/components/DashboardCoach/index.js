import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import NextBookings from './nextBookings';
import LastBookings from './lastBookings';
import './styles.scss';

const DashboardCoach = ({ getNextBookings, nextBookingsArray }) => {
  console.log('composant', nextBookingsArray);
  useEffect(getNextBookings, []);
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <NextBookings nextBookingsArray={nextBookingsArray} />
        <LastBookings />
      </div>
      <a href="https://github.com/" className="dashboard-link">Voir les adhérents </a>
    </div>
  );
};

export default DashboardCoach;
