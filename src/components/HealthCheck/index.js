// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const HealthCheck = ({ findLastHealthCheck }) => (
  <div className="health-check">
    <h2 className="health-check__title">Suivi santé</h2>
    <p className="health-check__weight">{findLastHealthCheck.weight} kg</p>
    <div className="health-check__charts">
      <p className="pie__chart">Graphique sous forme de camenbert</p>
      <p className="line__chart">Graphique sous forme de courbes</p>
      <div className="health-check__data">
        <div className="water__data">
          <p className="data-text">Masse hydrique</p>
          <p className="data-text">{findLastHealthCheck.bodyWater} %</p>
        </div>
        <div className="other__data">
          <p className="data-text">{findLastHealthCheck.muscleMass} % de masse masculaire</p>
          <p className="data-text">{findLastHealthCheck.fatMass} % de masse graisseuse</p>
          <p className="data-text">{findLastHealthCheck.boneMass} % de masse osseuse</p>
        </div>
      </div>
    </div>
  </div>
);

// == Props Validation
HealthCheck.propTypes = {
  findLastHealthCheck: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    bodyWater: PropTypes.number.isRequired,
    muscleMass: PropTypes.number.isRequired,
    fatMass: PropTypes.number.isRequired,
    boneMass: PropTypes.number.isRequired,
  }).isRequired,
};

// == Export
export default HealthCheck;
