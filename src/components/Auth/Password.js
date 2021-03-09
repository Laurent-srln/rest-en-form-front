// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Password = ({ inputPasswordValue, onChangeInputPasswordValue, onSubmitPasswordForm }) => {
  const handleOnChangePassword = (event) => {
    // console.log('on change', event.target.value);
    onChangeInputPasswordValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log('handleOnSubmit');
    if (inputPasswordValue) {
      onSubmitPasswordForm();
    }
  };

  return (
    <form
      className="passwordForm"
      onSubmit={handleOnSubmit}
    >
      <label
        className="passwordForm__label"
        htmlFor="password"
      >
        Votre mot de passe
        <input
          className="passwordForm__input"
          type="password"
          name="password"
          id="password"
          placeholder="*************"
          value={inputPasswordValue}
          onChange={handleOnChangePassword}
        />
      </label>

      <div className="passwordForm__submit">
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
/*
Password.propTypes = {
  inputPasswordValue: PropTypes.string.isRequired,
  onChangeInputPasswordValue: PropTypes.func.isRequired,
  onSubmitPasswordForm: PropTypes.func.isRequired,
};
*/

// == Export
export default Password;
