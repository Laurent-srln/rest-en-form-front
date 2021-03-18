import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const lastBookings = ({ lastBookingsArray }) => (
  <div className="dashboard-last-coaching">
    <h2 className="dashboard-last-coaching-title">Dernier coachings</h2>
    <div className="dashboard-last-coaching-container">
      <ul className="dashboard-list-info">
        <li>Date</li>
        <li>Heure</li>
        <li>Adhérent</li>
      </ul>
      {
          lastBookingsArray.map((lastBookingObject) => (
            <ul key={lastBookingObject.id} className="dashboard-list-info-item">
              <li>{dayjs(lastBookingObject.startTime).tz('Europe/Paris').locale('fr').format('dddd DD MMMM')}</li>
              <li>
                {dayjs(lastBookingObject.startTime).tz('Europe/Paris').locale('fr').format('H:mm')}
                <span> - </span>
                {dayjs(lastBookingObject.endTime).tz('Europe/Paris').locale('fr').format('H:mm')}
              </li>
              <li><Link to={`/members/${lastBookingObject.memberId}/workouts`}>{lastBookingObject.memberFirstname} {lastBookingObject.memberLastname}</Link></li>
            </ul>
          ))
      }
    </div>
  </div>
);

lastBookings.propTypes = {
  lastBookingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      memberId: PropTypes.number.isRequired,
      memberFirstname: PropTypes.string.isRequired,
      memberLastname: PropTypes.string.isRequired,
    }),
  ),
};
export default lastBookings;
