// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Coachs = ({ coachs, getAllCoachs }) => {
  useEffect(getAllCoachs, []);

  return (
    <div className="coachs">
      <h1 className="coachs__title">Les coachs</h1>
      <div className="coachs__content">
        {
          coachs.map((coachObject) => (
            <div className="coach" key={coachObject.id}>
              <div className="coach__info">
                <p className="coach__info-name">{coachObject.firstname} {coachObject.lastname}</p>
                <img
                  className="coach__info-img"
                  src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
                  alt=""
                />
              </div>
              <div className="coach__specialities">
                {coachObject.specialties === null && (
                <p className="coach__specialities-item">Ce Coach n'as pas de spécialitées</p>
                )}
                {coachObject.specialties !== null && (
                <p className="coach__specialities-item">{coachObject.specialties}</p>
                )}
              </div>
            </div>
          ))
              }
      </div>
      <a href="">
        <p className="coach__cta">+ Réserver un coaching</p>
        {/* <p className="coach__cta">Ajouter un coach</p> */}
      </a>
    </div>
  );
};

// == Props Validation

Coachs.propTypes = {
  coachs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      specialties: PropTypes.array,
    }),
  ).isRequired,
  getAllCoachs: PropTypes.func.isRequired,
};

// == Export
export default Coachs;
