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
    // console.log('on change', event.target.value);
    onChangeInputNewPasswordValue(event.target.value);
  };

  const handleOnChangeConfirmPassword = (event) => {
    // console.log('on change', event.target.value);
    onChangeInputConfirmPasswordValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log('handleOnSubmit');
    if (inputNewPasswordValue && inputConfirmPasswordValue) {
      onSubmitNewPasswordForm();
    }
  };

  return (
    <form
      className="newPasswordForm"
      onSubmit={handleOnSubmit}
    >
      <label
        className="newPasswordForm__label"
        htmlFor="newPassword"
      >
        Votre nouveau mot de passe
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
        Confirmation de votre nouveau mot de passe
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
