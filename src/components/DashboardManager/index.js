import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const DashboardManager = () => (
  <div className="dashboard">
    <div className="dashboard-content-left">
      <div className="dashboard-show-members">
        <span className="dashboard-show-members-title">536 Adhérents</span>
        <a className="dashboard-show-members-link">Voir les adhérents</a>
      </div>
      <div className="dashboard-show-coachs">
        <span className="dashboard-show-coachs-title">6 Coachs</span>
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
              Nutrition
            </label>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Haltérophilie
            </label>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Musculation
            </label>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Cardio
            </label>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Electrostimulation
            </label>
            <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              machin truc
            </label>
            <button type="submit" className="dashboard-add-user-submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
    <div className="dashboard-content-right">
    <div className="dashboard-slot">
      <span className="dashboard-slot-title">Liste des créneaux enregistrés</span>
      <ul>
        <li>Date</li>
        <li>Heure de début</li>
        <li>Heure de fin</li>
        <li>Coach</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
      <ul>
        <li>Du 05/08/2020 au 22/03/2021</li>
        <li>9h00</li>
        <li>18h00</li>
        <li>Rocky</li>
      </ul>
    </div>
    </div>
  </div>
);

DashboardManager.propTypes = {};
export default DashboardManager;
