// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

import dayjs from 'dayjs';

// dayjs
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Coaching = ({ coachFirstname, startTime, endTime }) => {
  console.log('startTime', startTime);
  const formatedDay = dayjs(startTime).tz('Europe/Paris').locale('fr').format('dddd D MMMM');
  console.log(formatedDay);

  const formatedStartTime = dayjs(startTime).tz('Europe/Paris').locale('fr').format('H:mm');
  console.log(formatedStartTime);

  const formatedEndTime = dayjs(endTime).tz('Europe/Paris').locale('fr').format('H:mm');
  console.log(formatedEndTime);

  return (
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
          {coachFirstname}
        </p>
      </div>

      <div className="coaching__datetime">
        <p
          className="date"
        >
          {formatedDay}
        </p>
        <p
          className="time"
        >
          {formatedStartTime} - {formatedEndTime}
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
};

// == Props Validation
Coaching.propTypes = {
  coachFirstname: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

// == Export
export default Coaching;
