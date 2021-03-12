import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
              <li>1 sept 1991</li>
              <li>11h20</li>
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
    }),
  ),
};
export default nextBookings;