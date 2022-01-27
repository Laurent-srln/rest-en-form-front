import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';

import fr from 'date-fns/locale/fr';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import formatWithOptions from 'date-fns/fp/formatWithOptions';

registerLocale('fr', fr);

const CreateSlot = ({
  getAllCoachs,
  coachsList,
  selectedDate,
  selectedStart,
  selectedEnd,
  selectedCoach,
  onChangeInputSlotDateValue,
  onChangeInputStartValue,
  onChangeInputEndValue,
  onChangeInputCoachValue,
  onSubmitSlotForm,
  successMessageAddSlot,
  errorMessageAddSlot,
}) => {
  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');

  const handleSlotDateChange = (date) => {
    onChangeInputSlotDateValue(date);
    // console.log(event.target.value);
  };
  const handleStartChange = (start) => {
    onChangeInputStartValue(start);
    // console.log(event.target.value);
  };
  const handleEndChange = (end) => {
    onChangeInputEndValue(end);
    // console.log(event.target.value);
  };
  const handleCoachChange = (event) => {
    onChangeInputCoachValue(event.target.value);
    // console.log(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitSlotForm();
  };

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 17));

  useEffect(getAllCoachs, []);

  return (

      <form
        className="dashboard-select-slot-form"
        action="post"
        method="post"
        onSubmit={handleOnSubmit}
      >
        <h3
          className="dashboard-select-slot-title"
          htmlFor="slot-select"
        >
          Ajouter des créneaux
        </h3>
        <DatePicker
          className="dashboard-select-slot-date"
          selected={selectedDate}
          onChange={handleSlotDateChange}
          dateFormat={dateToString}
          minDate={new Date()}
          filterDate={(date) => date.getDay() !== 0}
          locale="fr"
          inline
        />
        <DatePicker
          className="dashboard-select-slot-input"
          selected={selectedStart}
          onChange={handleStartChange}
          value={selectedStart === "" ? "" : new Date(selectedStart).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={selectedEnd === "" ? setHours(setMinutes(new Date(), 0), 20) : setHours(setMinutes(new Date(), parseInt(new Date(selectedEnd).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).substring(3))), parseInt(new Date(selectedEnd).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).substring(0,2)))}
          dateFormat="hh:mm"
          placeholderText="Cliquez pour choisir une heure de début"
          locale="fr"
        />
        <DatePicker
          className="dashboard-select-slot-input"
          selected={selectedEnd}
          onChange={handleEndChange}
          value={selectedEnd === "" ? "" : new Date(selectedEnd).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          minTime={selectedStart === "" ? setHours(setMinutes(new Date(), 0), 8) : setHours(setMinutes(new Date(), parseInt(new Date(selectedStart).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).substring(3))), parseInt(new Date(selectedStart).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).substring(0,2)))}
          maxTime={setHours(setMinutes(new Date(), 0), 20)}
          dateFormat="hh:mm"
          placeholderText="Cliquez pour choisir une heure de fin"
          locale="fr"
          
        />
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          <select
            className="dashboard-select-slot-select"
            name="slot"
            id="slot-select"
            onChange={handleCoachChange}
            required
            value={selectedCoach}
          >
            <option value="" disabled  hidden>Cliquez pour sélectionner un coach</option>
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
        <button className="dashboard-select-slot-submit" type="submit">Valider</button>
        {successMessageAddSlot && (
          <div className="success-addslot">
            <p className="success-addslot-text">{successMessageAddSlot}</p>
          </div>
        )}
        {errorMessageAddSlot && (
          <div className="error">
            <p className="error__text">{errorMessageAddSlot}</p>
          </div>
        )}
      </form>

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
  selectedCoach: PropTypes.any.isRequired,
  onChangeInputSlotDateValue: PropTypes.func.isRequired,
  onChangeInputStartValue: PropTypes.func.isRequired,
  onChangeInputEndValue: PropTypes.func.isRequired,
  onChangeInputCoachValue: PropTypes.func.isRequired,
  onSubmitSlotForm: PropTypes.func.isRequired,
  successMessageAddSlot: PropTypes.string.isRequired,
  errorMessageAddSlot: PropTypes.string.isRequired,
};
export default CreateSlot;
