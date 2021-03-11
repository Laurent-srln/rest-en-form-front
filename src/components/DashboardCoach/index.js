import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DashboardCoach = ({ date, hour, name }) => (
  <div className="dashboard">
    <div className="dashboard-container">
      <div className="dashboard-next-coaching">
        <h2 className="dashboard-next-coaching-title">Prochain coachings</h2>
        <div className="dashboard-next-coaching-container">
          <ul className="dashboard-list-info">
            <li>Date</li>
            <li>Heure</li>
            <li>Adhérent</li>
          </ul>
          <ul className="dashboard-list-info-item">
            <li>{date}</li>
            <li>{hour}</li>
            <li>{name}</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-last-coaching">
        <h2 className="dashboard-last-coaching-title">Dernier coachings</h2>
        <div className="dashboard-last-coaching-container">
          <ul className="dashboard-list-info">
            <li>Date</li>
            <li>Heure</li>
            <li>Adhérent</li>
          </ul>
          <ul className="dashboard-list-info-item">
            <li>{date}</li>
            <li>{hour}</li>
            <li>{name}</li>
          </ul>
        </div>
      </div>
    </div>
    <a href="https://github.com/" className="dashboard-link">Voir les adhérents </a>
  </div>
);

/*
DashboardCoach.propTypes = {
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
*/
export default DashboardCoach;
