// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// == Imports
// import Coachs from 'src/containers/GetCoachs/Coachs';
import './style.scss';

import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

registerLocale('fr', fr);

// == Composant
const BookingCoaching = ({
  startDate,
  setStartDate,
}) => {
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');

  return (
    <div className="booking-coaching">
      <div className="add-coaching">
        <p className="add-coaching__title">Réserver un coaching</p>
        <label
          className="add-coaching__label-date"
          htmlFor="date"
        >
          Sélectionner une date
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat={dateToString}
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
            inline
            locale="fr"
            // withPortal
          />
          {/* <input
            className="add-coaching__input-date"
            type="date"
            name="date"
            value={inputDateBookingCoachingValue}
            onChange={handleOnChangeDateBookingCoaching}
          /> */}
        </label>

        <form>
          <select
            className="add-coaching__select"
            name="coaching"
            id="coaching-select"
          >
            <option value="">Sélectionner un créneau</option>
            <option value="9h00-9h15 - Sountid">9h00-9h15 - Sountid</option>
            <option value="9h00-9h15 - Mathilde">9h00-9h15 - Mathilde</option>
            <option value="9h15-9h30 - Sountid">9h15-9h30 - Sountid</option>
          </select>
          <div>
            <button
              className="add-coaching__submit"
              type="submit"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
      <div className="booking-coaching__coachs">
        {/* <Coachs /> */}
      </div>
    </div>
  );
};

// == Props Validation
BookingCoaching.propTypes = {
  startDate: PropTypes.string.isRequired,
  setStartDate: PropTypes.func.isRequired,
};

// == Export
export default BookingCoaching;
