// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo-sans-fond.png';

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
  message,
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
 
      <div className="auth-container">
        <div className ="auth-logo-container">
          <div className="auth-div-log">
            <img className="auth-logo" src={logo} alt="Logo REST'enforme" />
          </div>       
        </div>
          <div className="auth">

          <form
            className="auth-form"
            onSubmit={handleOnSubmit}
          >
            {/*<h3 className="auth-form-title">Connexion</h3>*/}
            <div className="auth-form-group">
              <label
                className="auth-form-label"
                htmlFor="email"
              >
                Email
                <input
                  className="auth-form-input"
                  method="post"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="votre@email.com"
                  value={inputMailValue}
                  onChange={handleOnChangeMail}
                />
              </label>
            </div>
            <div className="auth-form-group">
              <label
                className="auth-form-label"
                htmlFor="password"
              >
                Mot de passe
                <input
                  className="auth-form-input"
                  type="password"
                  name="password"
                  id="password"
                  // placeholder=""
                  value={inputPasswordValue}
                  onChange={handleOnChangePassword}
                />
              </label>
            <div className="lost-password">
              <a href="#">J'ai encore oublié mon mot de passe...</a>
            </div>

            </div>

          <div className="auth-form-group">
            <button
              type="submit"
              className="auth-form-group-button"
            >
              Se connecter
            </button>
          </div>
          { message && (
          <div className="error">{message}</div>)}
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
  message: PropTypes.string,
};

// == Export
export default Auth;
