// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const HealthCheck = () => (
  <div className="health-check">
    <h1 className="health-check__title">Suivi santé</h1>
    <p className="health-check__weight">84 kg</p>
    <div className="health-check__charts">
      <p className="pie__chart">Graphique sous forme de camenbert</p>
      <p className="line__chart">Graphique sous forme de courbes</p>
      <div className="health-check__data">
        <div className="water__data">
          <p className="data-text">Masse hydrique</p>
          <p className="data-text">58 %</p>
        </div>
        <div className="other__data">
          <p className="data-text">30 % de masse masculaire</p>
          <p className="data-text">15 % de masse graisseuse</p>
          <p className="data-text">2 % de masse osseuse</p>
        </div>
      </div>
    </div>
  </div>
);

// == Props Validation

// == Export
export default HealthCheck;
