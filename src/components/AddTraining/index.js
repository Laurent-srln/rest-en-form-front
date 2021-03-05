// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const AddTraining = () => (
  <div className="add-training">
    <h1 className="add-training__title">Enregistrer un entraînement</h1>
    <form
      className="add-training__form"
      action="post"
      method="post"
    >
      <div className="add-training__form-date">
        <label
          className="label__date"
          htmlFor="date"
        >
          Sélectionner une date
          <input
            className="input__date"
            type="date"
          />
        </label>
      </div>

      <p className="subtitle">Ajouter vos données de santé</p>
      <div className="add-training__form-health">
        <div>
          <label
            className="label"
            htmlFor="weight"
          >
            Poids
            <input
              className="input"
              type="number"
              min="0"
            />
            kg
          </label>
        </div>
        <div>
          <label
            className="label"
            htmlFor="muscular"
          >
            Masse musculaire
            <input
              className="input"
              type="number"
              min="0"
            />
            %
          </label>
          <label
            className="label"
            htmlFor="fat"
          >
            Masse graisseuse
            <input
              className="input"
              type="number"
              min="0"
            />
            %
          </label>
          <label
            className="label"
            htmlFor="bone"
          >
            Masse osseuse
            <input
              className="input"
              type="number"
              min="0"
            />
            %
          </label>
          <label
            className="label"
            htmlFor="water"
          >
            Masse hydrique
            <input
              className="input"
              type="number"
              min="0"
            />
            %
          </label>
        </div>
      </div>
      <div className="add-training__form-details">
        <label
          className="label__details"
          htmlFor="details"
        >
          Détailler la séance
          <input
            className="input__details"
            type="text"
            size={100}
            row={100}
          />
        </label>
      </div>
      <div className="add-training__form-comment">
        <label
          className="label__comment"
          htmlFor="comment"
        >
          Ajouter un commentaire
          <input
            className="input__comment"
            type="text"
          />
        </label>
      </div>
      <div>
        <button
          className="add-training__form-submit"
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
export default AddTraining;
