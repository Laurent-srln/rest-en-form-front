// == Import npm
import React from 'react';
import { useLocation } from 'react-router-dom';
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
  successMessageSaveNewUser,
  errorMessageSaveNewUser,
}) => {
  const token = useLocation();

  const handleOnChangeNewPassword = (event) => {
    onChangeInputNewPasswordValue(event.target.value);
  };

  const handleOnChangeConfirmPassword = (event) => {
    onChangeInputConfirmPasswordValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputNewPasswordValue === inputConfirmPasswordValue) {
      onSubmitNewPasswordForm(token);
    }
    else {
      alert('Les deux mots de passe doivent être identiques');
    }
  };

  return (
    <div>
      <h1 className="newPassword__title">Créer un mot de passe</h1>
      <form
        className="newPasswordForm"
        onSubmit={handleOnSubmit}
        value={token}
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
        {/*
        {inputNewPasswordValue !== inputConfirmPasswordValue && (
          <div className="error">
            <p className="error__text">Les deux mots de passe doivent être identiques</p>
          </div>
        )}
        */}
        {errorMessageSaveNewUser && (
          <div className="error">
            <p className="error__text">{errorMessageSaveNewUser}</p>
          </div>
        )}

        <div className="newPasswordForm__submit">
          <button
            className="button"
            type="submit"
          >
            Valider
          </button>
        </div>

      </form>
      {successMessageSaveNewUser && (
        <div className="success">
          <p className="success__text">{successMessageSaveNewUser}</p>
        </div>
      )}
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
  successMessageSaveNewUser: PropTypes.string.isRequired,
  errorMessageSaveNewUser: PropTypes.string.isRequired,
};

// == Export
export default NewPassword;
