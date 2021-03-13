// == Import npm
import React from 'react';

// == Imports
import Coachs from 'src/containers/GetCoachs/Coachs';
import AddCoaching from './AddCoaching';
import './style.scss';

// == Composant
const BookingCoaching = () => (
  <div className="booking-coaching">
    <AddCoaching />
    <div className="booking-coaching__coachs">
      <Coachs />
    </div>
  </div>
);

// == Props Validation

// == Export
export default BookingCoaching;
