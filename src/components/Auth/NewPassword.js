// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const NewPassword = ({
  inputNewPasswordValue,
  inputConfirmPasswordValue,
  onChangeInputNewPasswordValue,
  onChangeInputConfirmPasswordValue,
  onSubmitNewPasswordForm,
}) => {
  const handleOnChangeNewPassword = (event) => {
    onChangeInputNewPasswordValue(event.target.value);
  };

  const handleOnChangeConfirmPassword = (event) => {
    onChangeInputConfirmPasswordValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputNewPasswordValue && inputConfirmPasswordValue) {
      onSubmitNewPasswordForm();
    }
  };

  return (
    <div>
      <h1 className="newPassword__title">Créer un mot de passe</h1>
      <form
        className="newPasswordForm"
        onSubmit={handleOnSubmit}
      >
        <label
          className="newPasswordForm__label"
          htmlFor="newPassword"
        >
          Nouveau mot de passe
          <input
            className="newPasswordForm__input"
            type="password"
            name="newPassword"
            id="newPassword"
            value={inputNewPasswordValue}
            onChange={handleOnChangeNewPassword}
          />
        </label>

        <label
          className="newPasswordForm__label"
          htmlFor="confirmPassword"
        >
          Confirmation du nouveau mot de passe
          <input
            className="newPasswordForm__input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={inputConfirmPasswordValue}
            onChange={handleOnChangeConfirmPassword}
          />
        </label>

        <div className="newPasswordForm__submit">
          <button
            className="button"
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

NewPassword.propTypes = {
  inputNewPasswordValue: PropTypes.string.isRequired,
  inputConfirmPasswordValue: PropTypes.string.isRequired,
  onChangeInputNewPasswordValue: PropTypes.func.isRequired,
  onChangeInputConfirmPasswordValue: PropTypes.func.isRequired,
  onSubmitNewPasswordForm: PropTypes.func.isRequired,
};

// == Export
export default NewPassword;
