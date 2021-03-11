// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

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
}) => (
  <div className="workout">
    <div className="workout__icons">
      <img
        className="bubble"
        src="https://img2.freepng.fr/20180617/pil/kisspng-grow-around-speech-balloon-text-clip-art-conversation-bubble-5b26b2ea357129.2881425615292628262189.jpg"
        alt=""
      />
      <img
        className="pencil"
        src="https://cdn.pixabay.com/photo/2016/03/31/19/15/crayon-1294842_960_720.png"
        alt=""
      />
    </div>
    <p className="workout__date">{date}</p>
    <p className="workout__text">{description}</p>
    <div className="training__health">
      <p className="amount">Poids : {weight} kg</p>
      <span className="amount"> / </span>
      <p className="amount">Masse hydrique : {bodyWater} %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse musculaire : {muscleMass} %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse osseuse : {boneMass} %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse grasse : {fatMass} %</p>
    </div>
    
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
          <span className="date">{commentDate}</span>
          <span> - </span>
          <span className="time">{commentDate}</span>
        </p>
      </div>
      <p className="coach-comment--text">{commentContent}</p>
    </div>

    <button
      type="button"
      className="workout__button"
    >
      Voir moins
    </button>
  </div>
);

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
