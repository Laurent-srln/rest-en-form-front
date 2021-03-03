import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const DashboardCoach = () => (
  <div className="dashboard">
    <div className="dashboard-container">
      <div className="dashboard-next-coaching">
        <h2 className="dashboard-next-coaching-title">Prochain coachings</h2>
        <ul className="dashboard-list-info">
          <li>Date</li>
          <li>Heure</li>
          <li>Adhérent</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
      </div>
      <div className="dashboard-last-coaching">
        <h2 className="dashboard-last-coaching-title">Dernier coachings</h2>
        <ul className="dashboard-list-info">
          <li>Date</li>
          <li>Heure</li>
          <li>Adhérent</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
        <ul className="dashboard-list-info-item">
          <li>Mardi 6 févirer</li>
          <li>9h15-9h30</li>
          <li>Jean</li>
        </ul>
      </div>
    </div>
    <a href="https://github.com/" className="dashboard-link">Voir les adhérents </a>
  </div>
);

// DashboardCoach.propTypes = {};
export default DashboardCoach;
