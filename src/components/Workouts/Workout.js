// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Workout = ({
  date,
  description,
  weight,
  bodyWater,
  muscleMass,
  boneMass,
  fatMass,
  commentCoachFirstname,
  commentContent,
  commentDate,
}) => {
  const formatedDay = dayjs(date).tz('Europe/Paris').locale('fr').format('dddd D MMMM');

  const formatedDayCoachcomment = dayjs(commentDate).tz('Europe/Paris').locale('fr').format('dddd D MMMM');
  const formatedHourCoachcomment = dayjs(commentDate).tz('Europe/Paris').locale('fr').format('H:mm');

  return (
    <div className="workout">
      <p className="workout__date">{formatedDay}</p>
      <div className="workout-content">
      <p className="workout__text">{description}</p>
      <div className="workout__health">
        <p className="amount">Poids : <span className="amount-span">{weight} kg</span></p>
        {/* <span className="amount span"> | </span> */}
        <p className="amount">Masse hydrique : <span className="amount-span">{bodyWater} %</span></p>
        {/* <span className="amount span"> | </span> */}
        <p className="amount">Masse musculaire : <span className="amount-span">{muscleMass} %</span></p>
        {/* <span className="amount span"> | </span> */}
        <p className="amount">Masse osseuse : <span className="amount-span">{boneMass} %</span></p>
        {/* <span className="amount span"> | </span> */}
        <p className="amount">Masse grasse : <span className="amount-span">{fatMass} %</span></p>
      </div>
      </div>
      {commentCoachFirstname && (
        <div className="coach-comment">
          <div className="coach-comment__meta">
            <img
              className="coach-comment__meta--img"
              src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
              alt=""
            />
            <p className="coach-comment__meta--info">
              <span className="author">{commentCoachFirstname}</span>
              <span> - </span>
              <span className="date">{formatedDayCoachcomment}</span>
              <span> - </span>
              <span className="time">{formatedHourCoachcomment}</span>
            </p>
          </div>
          <p className="coach-comment--text">{commentContent}</p>
        </div>
      )}
    </div>
  );
};

// == Props Validation
Workout.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  bodyWater: PropTypes.number.isRequired,
  muscleMass: PropTypes.number.isRequired,
  boneMass: PropTypes.number.isRequired,
  fatMass: PropTypes.number.isRequired,
  commentCoachFirstname: PropTypes.string,
  commentContent: PropTypes.string,
  commentDate: PropTypes.string,
};

Workout.defaultProps = {
  commentCoachFirstname: null,
  commentContent: null,
  commentDate: null,
};

// == Export
export default Workout;
