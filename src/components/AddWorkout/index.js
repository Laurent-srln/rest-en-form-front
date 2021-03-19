// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// == Imports
import './style.scss';

// date fns
import fr from 'date-fns/locale/fr';
import formatWithOptions from 'date-fns/fp/formatWithOptions';

// date fns
registerLocale('fr', fr);

// == Composant
const AddWorkout = ({
  inputDateValue,
  onChangeInputDateValue,
  inputWeightValue,
  onChangeInputWeightValue,
  inputMuscleMassValue,
  onChangeInputMuscleMassValue,
  inputFatMassValue,
  onChangeInputFatMassValue,
  inputBoneMassValue,
  onChangeInputBoneMassValue,
  inputBodyWaterValue,
  onChangeInputBodyWaterValue,
  inputContentValue,
  onChangeInputContentValue,
  onSubmitWorkoutForm,
  role,
  succesMessageAddWorkout,
  errorMessageAddWorkout,
}) => {
  const dateToString = formatWithOptions({ fr }, 'dd-MM-yyyy');
  const availableDate = new Date();

  const handleOnChangeDate = (date) => {
    onChangeInputDateValue(date);
  };

  const handleOnChangeWeight = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputWeightValue(DataParsed);
  };

  const handleOnChangeMuscleMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputMuscleMassValue(DataParsed);
  };

  const handleOnChangeFatMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputFatMassValue(DataParsed);
  };

  const handleOnChangeBoneMass = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputBoneMassValue(DataParsed);
  };

  const handleOnChangeBodyWater = (event) => {
    const DataParsed = Number(event.target.value);
    onChangeInputBodyWaterValue(DataParsed);
  };

  const handleOnChangeContent = (event) => {
    onChangeInputContentValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitWorkoutForm();
  };

  return (
    <div className="add-workout">
      <h1 className="add-workout__title">Enregistrer un entraînement</h1>
      <form
        className="add-workout__form"
        onSubmit={handleOnSubmit}
        action="post"
        method="post"
      >
        <div className="add-workout__form-date">
          <label
            className="label__date"
            htmlFor="date"
          >
            Sélectionner une date
            <DatePicker
              selected={inputDateValue}
              onChange={handleOnChangeDate}
              dateFormat={dateToString}
              maxDate={availableDate}
              minDate={new Date('01-01-2021')}
              inline
              locale="fr"
            />
          </label>
        </div>

        <p className="subtitle">Ajouter vos données de santé</p>
        <div className="add-training__form-health">
          <div>
            <label
              className="label"
              htmlFor="weight"
            >
              Poids
              <input
                className="input"
                type="number"
                min={0}
                value={inputWeightValue}
                onChange={handleOnChangeWeight}
                required
              />
              kg
            </label>
          </div>
          <div>
            <label
              className="label"
              htmlFor="muscular"
            >
              Masse musculaire
              <input
                className="input"
                type="number"
                min={0}
                value={inputMuscleMassValue}
                onChange={handleOnChangeMuscleMass}
                required
              />
              %
            </label>
            <label
              className="label"
              htmlFor="fat"
            >
              Masse graisseuse
              <input
                className="input"
                type="number"
                min={0}
                value={inputFatMassValue}
                onChange={handleOnChangeFatMass}
                required
              />
              %
            </label>
            <label
              className="label"
              htmlFor="bone"
            >
              Masse osseuse
              <input
                className="input"
                type="number"
                min={0}
                value={inputBoneMassValue}
                onChange={handleOnChangeBoneMass}
                required
              />
              %
            </label>
            <label
              className="label"
              htmlFor="water"
            >
              Masse hydrique
              <input
                className="input"
                type="number"
                min={0}
                value={inputBodyWaterValue}
                onChange={handleOnChangeBodyWater}
                required
              />
              %
            </label>
          </div>
          {errorMessageAddWorkout && (
          <div className="error">
            <p className="error__text">{errorMessageAddWorkout}</p>
          </div>
          )}
        </div>
        <div className="add-workout__form-details">
          <label
            className="label__details"
            htmlFor="details"
          >
            Détailler la séance
            <textarea
              className="input__details"
              type="text"
              value={inputContentValue}
              onChange={handleOnChangeContent}
            />
          </label>
        </div>

        {role === 'COACH' && (
          <div className="add-workout__form-comment">
            <label
              className="label__comment"
              htmlFor="comment"
            >
              Ajouter un commentaire
              <input
                className="input__comment"
                type="text"
              />
            </label>
          </div>
        )}

        <div>
          <button
            className="add-workout__form-submit"
            type="submit"
          >
            Valider
          </button>
        </div>
        {succesMessageAddWorkout && (
          <div className="success">
            <p className="success__text">{succesMessageAddWorkout}</p>
          </div>
        )}
      </form>
    </div>
  );
};

// == Props Validation

AddWorkout.propTypes = {
  inputDateValue: PropTypes.string.isRequired,
  onChangeInputDateValue: PropTypes.func.isRequired,
  inputWeightValue: PropTypes.number.isRequired,
  onChangeInputWeightValue: PropTypes.func.isRequired,
  inputMuscleMassValue: PropTypes.number.isRequired,
  onChangeInputMuscleMassValue: PropTypes.func.isRequired,
  inputFatMassValue: PropTypes.number.isRequired,
  onChangeInputFatMassValue: PropTypes.func.isRequired,
  inputBoneMassValue: PropTypes.number.isRequired,
  onChangeInputBoneMassValue: PropTypes.func.isRequired,
  inputBodyWaterValue: PropTypes.number.isRequired,
  onChangeInputBodyWaterValue: PropTypes.func.isRequired,
  inputContentValue: PropTypes.string.isRequired,
  onChangeInputContentValue: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  onSubmitWorkoutForm: PropTypes.func.isRequired,
  succesMessageAddWorkout: PropTypes.string,
  errorMessageAddWorkout: PropTypes.string,
};

AddWorkout.defaultProps = {
  succesMessageAddWorkout: null,
  errorMessageAddWorkout: null,
};

// == Export
export default AddWorkout;

/*
  <input
    className="input__date"
    type="date"
    value={inputDateValue}
    onChange={handleOnChangeDate}
    required
  />
*/
