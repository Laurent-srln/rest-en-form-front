import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DashboardManager = ({
  totalMembers,
  totalCoaches,
  specialityName,
  availableSlot,
  addStartSlot,
  addEndSlot,
  coachName,
  date,
  startSlot,
  endSlot,
}) => (
  <div className="dashboard">
    <div className="dashboard-content-left">
      <div className="dashboard-show-members">
        <span className="dashboard-show-members-title">{totalMembers} Adhérents</span>
        <a className="dashboard-show-members-link">Voir les adhérents</a>
      </div>
      <div className="dashboard-show-coachs">
        <span className="dashboard-show-coachs-title">{totalCoaches} Coachs</span>
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
              {specialityName}
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
            <option value="vendredi 2 février">{availableSlot}</option>
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
            <option value="9h00">{addStartSlot}</option>
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
            <option value="9h15">{addEndSlot}</option>
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
            <option value="Alexis">{coachName}</option>
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
          <li>{date}</li>
          <li>{startSlot}</li>
          <li>{endSlot}</li>
          <li>{coachName}</li>
        </ul>
      </div>
    </div>
  </div>
);

/*
DashboardManager.propTypes = {
  totalMembers: PropTypes.number.isRequired,
  totalCoaches: PropTypes.number.isRequired,
  specialityName: PropTypes.string.isRequired,
  availableSlot: PropTypes.string.isRequired,
  addStartSlot: PropTypes.string.isRequired,
  addEndSlot: PropTypes.string.isRequired,
  coachName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startSlot: PropTypes.string.isRequired,
  endSlot: PropTypes.string.isRequired,
};
*/
export default DashboardManager;
