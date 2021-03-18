import React, { useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';

import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

registerLocale('fr', fr);

const CreateSlot = ({
  getAllCoachs,
  coachsList,
  selectedDate,
  selectedStart,
  selectedEnd,
  onChangeInputSlotDateValue,
  onChangeInputStartValue,
  onChangeInputEndValue,
  onChangeInputCoachValue,
  onSubmitSlotForm,
}) => {
  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');

  const handleSlotDateChange = (date) => {
    onChangeInputSlotDateValue(date);
    // // console.log(event.target.value);
  };
  const handleStartChange = (start) => {
    onChangeInputStartValue(start);
    // // console.log(event.target.value);
  };
  const handleEndChange = (end) => {
    onChangeInputEndValue(end);
    // // console.log(event.target.value);
  };
  const handleCoachChange = (event) => {
    onChangeInputCoachValue(event.target.value);
    // // console.log(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitSlotForm();
  };

  useEffect(getAllCoachs, []);

  // console.log(coachsList);

  return (
    <div className="dashboard-select-slot">
      <form
        className="dashboard-select-slot-form"
        action="post"
        method="post"
        onSubmit={handleOnSubmit}
      >
        <h3
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Sélectionner une date
        </h3>
        <DatePicker
          selected={selectedDate}
          onChange={handleSlotDateChange}
          dateFormat={dateToString}
          minDate={new Date()}
          filterDate={(date) => date.getDay() !== 0}
          locale="fr"
          inline
          value="22/03/2021"
          placeholderText="22/03/2021"
        />
        <DatePicker
          selected={selectedStart}
          onChange={handleStartChange}
          value={onChangeInputStartValue}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm"
          placeholderText="9:00"
        />
        <DatePicker
          selected={selectedEnd}
          onChange={handleEndChange}
          value={selectedEnd}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm"
          placeholderText="9:00"
        />
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Coach
          <select
            className="slot-select"
            name="slot"
            id="slot-select"
            onChange={handleCoachChange}
          >
            {
            coachsList.map((coachObject) => (
              <option
                key={coachObject.id}
                value={coachObject.id}
              >
                {coachObject.firstname} {coachObject.lastname}
              </option>
            ))
          }
          </select>
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

CreateSlot.propTypes = {
  getAllCoachs: PropTypes.func.isRequired,
  coachsList: PropTypes.arrayOf(PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  selectedDate: PropTypes.any.isRequired,
  selectedStart: PropTypes.any.isRequired,
  selectedEnd: PropTypes.any.isRequired,
  onChangeInputSlotDateValue: PropTypes.func.isRequired,
  onChangeInputStartValue: PropTypes.func.isRequired,
  onChangeInputEndValue: PropTypes.func.isRequired,
  onChangeInputCoachValue: PropTypes.func.isRequired,
  onSubmitSlotForm: PropTypes.func.isRequired,
};
export default CreateSlot;
