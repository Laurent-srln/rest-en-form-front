// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const Training = () => (
  <ul className="training">
    <li className="training__item">
      <div className="content">
        <img
          className="content__coachImg"
          src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
          alt=""
        />
        <p
          className="content__coachName"
        >
          Alexandre Martin
        </p>
        <p
          className="content__date"
        >
          Mardi 10 mars 2021
        </p>
        <p
          className="content__time"
        >
          9h15-9h30
        </p>
        <img
          className="content__calendar"
          src="https://i1.wp.com/www.lasercamp.fr/wp-content/uploads/2018/02/icone-calendrier.png?resize=300%2C288"
          alt=""
        />
        <img
          className="content__clock"
          src="https://cdn.icon-icons.com/icons2/930/PNG/512/clock_icon-icons.com_72357.png"
          alt=""
        />
        <img
          className="content__trash"
          src="https://pngimage.net/wp-content/uploads/2018/06/poubelle-logo-png-4.png"
          alt=""
        />
      </div>
    </li>
  </ul>
);

// == Props Validation

// == Export
export default Training;
