// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

// == Imports
import './style.scss';
import { addMail } from '../../actions';

// == Composant
const Login = ({ inputMailValue, onChangeInputMailValue, onSubmitMailForm,  }) => {
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
        <Link to="/connexion">
          <button
            type="submit"
            className="button"
            onSubmit={(event) => {
              event.preventDefault();
                <Redirect to="/connexion" />;
            }}
          >
            Valider
          </button>
        </Link>
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
