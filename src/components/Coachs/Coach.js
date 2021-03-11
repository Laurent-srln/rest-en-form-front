// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Coach = ({
  coach, getAllCoachs,
}) => {
  useEffect(getAllCoachs, []);
  return (
    <>
      {
        coach.map((coachObject) => (
          <>
            <div className="coach" key={coachObject.email}>
              <div className="coach__info">
                <p className="coach__info-name">{coachObject.firstname} {coachObject.lastname}</p>
                <img
                  className="coach__info-img"
                  src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
                  alt=""
                />
              </div>
              {
                coachObject.specialities.map((specialitieObject) => (
                  <div className="coach__specialities">
                    <p className="coach__specialities-item">{[...specialitieObject]}</p>
                  </div>
                ))
              }
              <div className="coach__email">
                <p className="coach__email-item">{coachObject.email}</p>
              </div>
            </div>
          </>
        ))
      }
    </>
  );
};

// == Props Validation
/*
Coach.propTypes = {
  coach: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    specialities: PropTypes.array.isRequired,
  })).isRequired,
  getAllCoachs: PropTypes.func.isRequired,
};
*/
// == Export
export default Coach;
