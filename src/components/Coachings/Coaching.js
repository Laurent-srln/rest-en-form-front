// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Coaching = ({ coachName, date, time }) => (
  <div className="coaching">
    <div className="coaching__coach">
      <img
        className="img"
        src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
        alt=""
      />
      <p
        className="name"
      >
        {coachName}
      </p>
    </div>

    <div className="coaching__datetime">
      <p
        className="date"
      >
        {date}
      </p>
      <p
        className="time"
      >
        {time}
      </p>
    </div>

    <div className="coaching__icons">
      <img
        className="calendar"
        src="https://i1.wp.com/www.lasercamp.fr/wp-content/uploads/2018/02/icone-calendrier.png?resize=300%2C288"
        alt=""
      />
      <img
        className="clock"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5R-lxqkt0YRbKKNFdKRloCvkpxq_6yuevg&usqp=CAU"
        alt=""
      />
    </div>
    <img
      className="coaching__trash"
      src="https://pngimage.net/wp-content/uploads/2018/06/poubelle-logo-png-4.png"
      alt=""
    />
  </div>
);

// == Props Validation
Coaching.propTypes = {
  coachName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

// == Export
export default Coaching;
