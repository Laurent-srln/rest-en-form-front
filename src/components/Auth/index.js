// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports

// import NewPassword from './NewPassword';
// import NewPassword from 'src/containers/Auth/NewPassword';

import './style.scss';

// == Composant

const Auth = ({
  inputMailValue,
  onChangeInputMailValue,
  onSubmitMailForm,
  inputPasswordValue,
  onChangeInputPasswordValue,
}) => {
  const handleOnChangeMail = (event) => {
    onChangeInputMailValue(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    onChangeInputPasswordValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputMailValue && inputPasswordValue) {
      onSubmitMailForm();
    }
  };

  return (
    <div className="auth">
      <p className="auth__title">Connexion</p>
      <div className="auth__content">
        <form
          className="auth__form"
          onSubmit={handleOnSubmit}
        >
          <label
            className="auth__form-label"
            htmlFor="email"
          >
            Adresse email
            <input
              className="auth__form-input"
              method="post"
              type="email"
              name="email"
              id="email"
              placeholder="rodolphe.martin@oclock.io"
              value={inputMailValue}
              onChange={handleOnChangeMail}
            />
          </label>

          <label
            className="auth__form-label"
            htmlFor="password"
          >
            Mot de passe
            <input
              className="auth__form-input"
              type="password"
              name="password"
              id="password"
              placeholder="*************"
              value={inputPasswordValue}
              onChange={handleOnChangePassword}
            />
          </label>

          <div className="auth__form-submit">
            <button
              type="submit"
              className="button"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// == Props Validation
Auth.propTypes = {
  inputMailValue: PropTypes.string.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  onChangeInputPasswordValue: PropTypes.func.isRequired,
  onSubmitMailForm: PropTypes.func.isRequired,
};

// == Export
export default Auth;
