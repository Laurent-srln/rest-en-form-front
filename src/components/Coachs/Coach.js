// == Import npm
import React, { useEffect } from 'react';

// == Imports
import './style.scss';

// == Composant
console.log('component');
const Coach = ({
  coach, getAllCoachs,
}) => {
  useEffect(getAllCoachs, []);
  console.log('coach', coach);
  return (
    <>
      {
        coach.map((coachObject) => (
        <div className="coach">
          <div className="coach__info">
            <p className="coach__info-name">{coachObject.firstname} {coachObject.lastname}</p>
            <img
              className="coach__info-img"
              src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
              alt=""
            />
          </div>
          <div className="coach__specialities">
            <p className="coach__specialities-item">spécialité</p>
          </div>
          <div className="coach__email">
            <p className="coach__email-item">{coachObject.email}</p>
          </div>
        </div>
        ))
      }
    </>
  );
};

// == Props Validation

// == Export
export default Coach;
