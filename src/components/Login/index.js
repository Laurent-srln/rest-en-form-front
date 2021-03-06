// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Login = ({ inputMailValue, onChangeInputMailValue, onSubmitForm }) => {
  const handleOnChangeMail = (event) => {
    // console.log('on change', event.target.value);
    onChangeInputMailValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log('handleOnSubmit');
    if (inputMailValue) {
      onSubmitForm();
    }
  };
  return (
    <div className="login">
      <p className="login__title">Se connecter</p>
      <form
        className="login__form"
        onSubmit={handleOnSubmit}
      >
        <label
          className="login__form-label"
          htmlFor="email"
        >
          Votre adresse email
          <input
            className="login__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="rodolphe.martin@oclock.io"
            value={inputMailValue}
            onChange={handleOnChangeMail}
          />
        </label>

        {/* <label
          className="login__form-label"
          htmlFor="password"
        >
          Votre mot de passe
          <input
            className="login__form-input"
            type="password"
            name="password"
            id="password"
          />
        </label> */}

        {/* <label
          className="login__form-label"
          htmlFor="password"
        >
          Votre nouveau mot de passe
          <input
            className="login__form-input"
            type="password"
            name="password"
            id="password"
          />
        </label> */}

        {/* <label
          className="login__form-label"
          htmlFor="password"
        >
          Confirmation de votre nouveau mot de passe
          <input
            className="login__form-input"
            type="password"
            name="password"
            id="password"
          />
        </label> */}

        <div className="login__form-submit">
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
Login.propTypes = {
  inputMailValue: PropTypes.string.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Login;
