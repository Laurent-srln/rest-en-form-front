import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DashboardManager = () => (
  <div className="dashboard">
    <div className="dashboard-content-left">
      <div className="dashboard-show-members">
        <span className="dashboard-show-members-title">123 Adhérents</span>
        <a className="dashboard-show-members-link">Voir les adhérents</a>
      </div>
      <div className="dashboard-show-coachs">
        <span className="dashboard-show-coachs-title">3 Coachs</span>
        <a className="dashboard-show-coachs-link">Voir les coachs</a>
      </div>
      <div className="dashboard-add-user">
        <span className="dashboard-add-user-title">Ajouter un utilisateur</span>
        <form className="dashboard-add-user-form">
          <label htmlFor="checkbox">
            Adhérent
            <input type="checkbox" name="checkbox" id="checkbox" />
          </label>
          <label htmlFor="checkbox">
            Coach
            <input type="checkbox" name="checkbox" id="checkbox" />
          </label>
          <div className="dashboard-add-user-names">
            <label className="dashboard-add-user-firstname" htmlFor="text">
              Prénom
              <input type="text" name="text" id="text" />
            </label>
            <label className="dashboard-add-user-lasttname" htmlFor="text">
              Nom
              <input type="text" name="text" id="text" />
            </label>
          </div>
          <div className="dashboard-add-user-speciality">
            <h3 className="dashboard-add-user-speciality-title">Spécialités :</h3>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Musculation
            </label>
            <button type="submit" className="dashboard-add-user-submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
    <div className="dashboard-content-right">
      <div className="dashboard-select-slot">
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Date
          <select
            className="slot-select"
            name="slot"
            id="slot-select"
          >
            <option placeholder="10/02/2021" value=""> </option>
            <option value="vendredi 2 février">vendredi 2 février</option>
          </select>
        </label>
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Heure de début
          <select
            className="slot-select"
            name="slot"
            id="slot-select"
          >
            <option value="">Sélectionner un horaire</option>
            <option value="9h00">9h00</option>
          </select>
        </label>
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Heure de fin
          <select
            className="slot-select"
            name="slot"
            id="slot-select"
          >
            <option value="">Sélectionner un horaire</option>
            <option value="9h15">9h15</option>
          </select>
        </label>
        <label
          className="dashboard-select-slot-label"
          htmlFor="slot-select"
        >
          Coach
          <select
            className="slot-select"
            name="slot"
            id="slot-select"
          >
            <option value="">Sélectionner un coach</option>
            <option value="Alexis">Alexis</option>
          </select>
        </label>
      </div>
      <div className="dashboard-slot">
        <span className="dashboard-slot-title">Liste des créneaux enregistrés</span>
        <ul>
          <li>Date</li>
          <li>Heure de début</li>
          <li>Heure de fin</li>
          <li>Coach</li>
        </ul>
        <ul>
          <li>date</li>
          <li>debut</li>
          <li>fin</li>
          <li>Sountid</li>
        </ul>
      </div>
    </div>
  </div>
);

// DashboardManager.propTypes = {

// };
export default DashboardManager;
