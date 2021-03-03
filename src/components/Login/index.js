// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const Login = () => (
  <div className="login">
    <form
      className="login__form"
      method="post"
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
      </label>

      <label
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

// == Props Validation

// == Export
export default Login;
