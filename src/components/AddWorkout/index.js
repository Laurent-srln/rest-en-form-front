// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

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
}) => {
  const handleOnChangeDate = (event) => {
    onChangeInputDateValue(event.target.value);
    // console.log('onChangeInputDateValue', event.target.value);
  };

  const handleOnChangeWeight = (event) => {
    onChangeInputWeightValue(event.target.value);
    // console.log('onChangeInputWeightValue', event.target.value);
  };

  const handleOnChangeMuscleMass = (event) => {
    onChangeInputMuscleMassValue(event.target.value);
    // console.log('onChangeInputMuscleMassValue', event.target.value);
  };

  const handleOnChangeFatMass = (event) => {
    onChangeInputFatMassValue(event.target.value);
    // console.log('onChangeInputFatMassValue', event.target.value);
  };

  const handleOnChangeBoneMass = (event) => {
    onChangeInputBoneMassValue(event.target.value);
    // console.log('onChangeInputBoneMassValue', event.target.value);
  };

  const handleOnChangeBodyWater = (event) => {
    onChangeInputBodyWaterValue(event.target.value);
    // console.log('onChangeInputBodyWaterValue', event.target.value);
  };

  const handleOnChangeContent = (event) => {
    onChangeInputContentValue(event.target.value);
    console.log('onChangeInputContentValue', event.target.value);
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
              required
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
              value={inputContentValue}
              onChange={handleOnChangeContent}
              required
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
};

// == Export
export default AddWorkout;
