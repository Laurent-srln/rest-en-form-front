// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const AddWorkout = ({
  inputDateValue,
  onChangeInputDateValue,
}) => {
  const handleOnChangeDate = (event) => {
    onChangeInputDateValue(event.target.value);
    console.log('onChangeInputDateValue', event.target.value);
  };

  return (
    <div className="add-workout">
      <h1 className="add-workout__title">Enregistrer un entraînement</h1>
      <form
        className="add-workout__form"
        action="post"
        method="post"
      >
        <div className="add-workout__form-date">
          <label
            className="label__date"
            htmlFor="date"
          >
            Sélectionner une date
            <input
              className="input__date"
              type="date"
              value={inputDateValue}
              onChange={handleOnChangeDate}
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
                min="0"
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
                min="0"
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
                min="0"
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
                min="0"
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
                min="0"
              />
              %
            </label>
          </div>
        </div>
        <div className="add-workout__form-details">
          <label
            className="label__details"
            htmlFor="details"
          >
            Détailler la séance
            <input
              className="input__details"
              type="text"
              size={100}
              row={100}
            />
          </label>
        </div>
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
        <div>
          <button
            className="add-workout__form-submit"
            type="submit"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

// == Props Validation

AddWorkout.propTypes = {
  inputDateValue: PropTypes.string.isRequired,
  onChangeInputDateValue: PropTypes.func.isRequired,
};

// == Export
export default AddWorkout;
