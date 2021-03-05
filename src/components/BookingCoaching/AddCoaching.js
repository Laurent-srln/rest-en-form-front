// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const AddCoaching = () => (
  <div className="add-coaching">
    <p className="add-coaching__title">Réserver un coaching</p>
    <form
      className="add-coaching__form"
      action="post"
      method="post"
    >
      <label
        className="add-coaching__label-date"
        htmlFor="date"
      >
        Sélectionner une date
        <input
          className="add-coaching__input-date"
          type="date"
        />
      </label>
      <select
        className="add-coaching__select"
        name="coaching"
        id="coaching-select"
      >
        <option value="">Sélectionner un créneau</option>
        <option value="9h00-9h15 - Sountid">9h00-9h15 - Sountid</option>
        <option value="9h00-9h15 - Mathilde">9h00-9h15 - Mathilde</option>
        <option value="9h15-9h30 - Sountid">9h15-9h30 - Sountid</option>
      </select>
      <div>
        <button
          className="add-coaching__submit"
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
export default AddCoaching;
