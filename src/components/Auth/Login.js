// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Login = ({ inputMailValue, onChangeInputMailValue, onSubmitMailForm }) => {
  const handleOnChangeMail = (event) => {
    onChangeInputMailValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputMailValue) {
      onSubmitMailForm();
    }
  };

  return (
    <form
      className="loginForm"
      onSubmit={handleOnSubmit}
    >
      <label
        className="loginForm__label"
        htmlFor="email"
      >
        Votre adresse email
        <input
          className="loginForm__input"
          method="post"
          type="email"
          name="email"
          id="email"
          placeholder="rodolphe.martin@oclock.io"
          value={inputMailValue}
          onChange={handleOnChangeMail}
        />
      </label>

      <div className="loginForm__submit">
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
Login.propTypes = {
  inputMailValue: PropTypes.string.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  onSubmitMailForm: PropTypes.func.isRequired,
};

// == Export
export default Login;
