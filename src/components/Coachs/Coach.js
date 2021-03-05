// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const Coach = () => (
  <div className="coach">
    <div className="coach__info">
      <p className="coach__info-name">Jean Martin</p>
      <img
        className="coach__info-img"
        src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
        alt=""
      />
    </div>
    <div className="coach__specialities">
      <p className="coach__specialities-item">Nutrition</p>
      <p className="coach__specialities-item">Haltérophilie</p>
      <p className="coach__specialities-item">Gymnastique</p>
    </div>
  </div>
);

// == Props Validation

// == Export
export default Coach;
