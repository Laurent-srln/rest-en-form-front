// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// == Imports
// import Coachs from 'src/containers/GetCoachs/Coachs';
import './style.scss';

// date fns
import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// date fns
registerLocale('fr', fr);

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const BookingCoaching = ({
  startDate,
  setStartDate,
  selectedDate,
  onChangeInputSlotValue,
  onSubmitAddCoachingForm,
}) => {
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleOnChangeSlot = (event) => {
    onChangeInputSlotValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (selectedDate) {
      onSubmitAddCoachingForm();
    }
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
            filterDate={(date) => date.getDay() !== 0}
            inline
            locale="fr"
          />
        </label>

        <form
          onSubmit={handleOnSubmit}
        >
          <select
            className="add-coaching__select"
            name="coaching"
            id="coaching-select"
            onChange={handleOnChangeSlot}
          >
            <option value="">Sélectionner un créneau</option>
            {
              selectedDate.map((slot) => (
                <option
                  value={slot.id}
                  key={slot.id}
                >
                  {dayjs('2021-03-02' + slot.start_time).tz('Europe/Paris').locale('fr').format('H:mm')} - {dayjs('2021-03-02' + slot.end_time).tz('Europe/Paris').locale('fr').format('H:mm')} {slot.firstname} {slot.lastname}
                </option>
              ))
            }
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
  selectedDate: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      start_time: PropTypes.string.isRequired,
      end_time: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChangeInputSlotValue: PropTypes.func.isRequired,
  onSubmitAddCoachingForm: PropTypes.func.isRequired,
};

// == Export
export default BookingCoaching;
