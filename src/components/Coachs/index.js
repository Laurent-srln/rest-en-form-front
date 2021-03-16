// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Coachs = ({ coach, getAllCoachs }) => {
  useEffect(getAllCoachs, []);
  
  const { specialties } = coach;

  const coachSpecialties = specialties.map((specialtieObject) => (
    <div className="coach__specialities" key={[...specialtieObject]}>
      <p className="coach__specialities-item">{[...specialtieObject]}</p>
    </div>
  ));

  return (
    <div className="coachs">
      <h1 className="coachs__title">Les coachs</h1>
      <div className="coachs__content">
        {
          coach.map((coachObject) => (
            <div className="coach" key={coachObject.id}>
              <div className="coach__info">
                <p className="coach__info-name">{coachObject.firstname} {coachObject.lastname}</p>
                <img
                  className="coach__info-img"
                  src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
                  alt=""
                />
              </div>
              <div>
                {coachSpecialties}
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
/*
Coachs.propTypes = {
  coach: PropTypes.arrayOf(
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
*/

// == Export
export default Coachs;
