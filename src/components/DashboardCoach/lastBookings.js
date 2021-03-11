import React from 'react';
import PropTypes from 'prop-types';

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
              <li>1 sept 1991</li>
              <li>11h20</li>
              <li>{lastBookingObject.memberFirstname}</li>
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
      memberFirstname: PropTypes.string.isRequired,
    }),
  ),
};
export default lastBookings;
