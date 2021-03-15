import React, { useEffect } from 'react';
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

const nextBookings = ({ nextBookingsArray }) => (
  <div className="dashboard-next-coaching">
    <h2 className="dashboard-next-coaching-title">Prochain coachings</h2>
    <div className="dashboard-next-coaching-container">
      <ul className="dashboard-list-info">
        <li>Date</li>
        <li>Heure</li>
        <li>Adhérent</li>
      </ul>
      {
          nextBookingsArray.map((nextBookingObject) => (
            <ul key={nextBookingObject.id} className="dashboard-list-info-item">
              <li>{dayjs(nextBookingObject.startTime).tz('Europe/Paris').locale('fr').format('dddd DD MMMM')}</li>
              <li>
                {dayjs(nextBookingObject.startTime).tz('Europe/Paris').locale('fr').format('H:mm')}
                <span> - </span>
                {dayjs(nextBookingObject.endTime).tz('Europe/Paris').locale('fr').format('H:mm')}
              </li>
              <li>{nextBookingObject.memberFirstname}</li>
            </ul>
          ))
      }
    </div>
  </div>
);

nextBookings.propTypes = {
  nextBookingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      memberFirstname: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
    }),
  ),
};
export default nextBookings;
