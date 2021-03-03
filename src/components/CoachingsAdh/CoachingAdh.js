// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const CoachingAdh = () => (
  <li className="coachingAdh">
    <img
      className="coachingAdh__img"
      src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
      alt=""
    />
    <p
      className="coachingAdh__name"
    >
      Alexandre Martin
    </p>
    <div className="coachingAdh__datetime">
      <p
        className="date"
      >
        Mardi 10 mars 2021
      </p>
      <p
        className="time"
      >
        9h15-9h30
      </p>
    </div>
    <div className="coachingAdh__icons">
      <img
        className="calendar"
        src="https://i1.wp.com/www.lasercamp.fr/wp-content/uploads/2018/02/icone-calendrier.png?resize=300%2C288"
        alt=""
      />
      <img
        className="clock"
        src="https://cdn.icon-icons.com/icons2/930/PNG/512/clock_icon-icons.com_72357.png"
        alt=""
      />
    </div>
    <img
      className="coachingAdh__trash"
      src="https://pngimage.net/wp-content/uploads/2018/06/poubelle-logo-png-4.png"
      alt=""
    />
  </li>
);

// == Props Validation

// == Export
export default CoachingAdh;
