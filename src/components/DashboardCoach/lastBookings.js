import React from 'react';
import PropTypes from 'prop-types';

const lastCoaching = () => (
  <div className="dashboard-last-coaching">
    <h2 className="dashboard-last-coaching-title">Dernier coachings</h2>
    <div className="dashboard-last-coaching-container">
      <ul className="dashboard-list-info">
        <li>Date</li>
        <li>Heure</li>
        <li>Adhérent</li>
      </ul>
      <ul className="dashboard-list-info-item">
        <li>2 fev 2010</li>
        <li>4h00</li>
        <li>Arnold</li>
      </ul>
    </div>
  </div>
);

// lastCoaching.propTypes = {};
export default lastCoaching;
