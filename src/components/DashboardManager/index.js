import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const DashboardManager = ({
  setInputFirstnameValue,
  onChangeInputFirstnameValue,
  onSubmitUserForm,
  setInputLastnameValue,
  onChangeInputLastnameValue,
  onChangeInputMemberRoleValue,
  onChangeInputCoachRoleValue,
  onChangeInputSpecialityValue,
  onChangeInputMailValue,
  setInputMemberRoleValue,
  setInputCoachRoleValue,
  setInputSpecialityValue,
  setInputMailValue,
  showAllMembers,
  getAllMembers,
  getAllSpecialities,
  allSpecialities,
}) => {
  const handleOnChangeFirstname = (event) => {
    onChangeInputFirstnameValue(event.target.value);
  };
  const handleOnChangeLastname = (event) => {
    onChangeInputLastnameValue(event.target.value);
  };
  const handleOnChangeMail = (event) => {
    onChangeInputMailValue(event.target.value);
  };
  const handleOnChangeMemberRole = (event) => {
    onChangeInputMemberRoleValue(event.target.value);
  };
  const handleOnChangeCoachRole = (event) => {
    onChangeInputCoachRoleValue(event.target.value);
  };
  const handleOnChangeSpeciality = (event) => {
    onChangeInputSpecialityValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // if (setInputFirstnameValue
    //     && setInputLastnameValue
    //     && setInputMailValue
    //     && (setInputCoachRoleValue || setInputMemberRoleValue)
    // ) {
    onSubmitUserForm();
    // else {
    //   alert('Veuillez remplir tous les champs');
    // }
  };

  // useEffect(saveUser, []);
  useEffect(getAllMembers, []);
  useEffect(getAllSpecialities, []);
  console.log(allSpecialities);
  return (
    <div className="dashboard">
      <div className="dashboard-content-left">
        <div className="dashboard-show-members">
          <span className="dashboard-show-members-title">{showAllMembers.length} Adhérents</span>
          <Link to="/members" className="dashboard-link">Voir les adhérents </Link>
        </div>
        <div className="dashboard-show-coachs">
          <span className="dashboard-show-coachs-title">3 Coachs</span>
          <a className="dashboard-show-coachs-link">Voir les coachs</a>
        </div>
        <div className="dashboard-add-user">
          <span className="dashboard-add-user-title">Ajouter un utilisateur</span>
          <form
            className="dashboard-add-user-form"
            onSubmit={handleOnSubmit}
            action="post"
            method="post"
          >
            <label htmlFor="checkbox">
              Adhérent
              <input
                type="radio"
                name="radio"
                id="checkbox-member"
                value={setInputMemberRoleValue}
                onChange={handleOnChangeMemberRole}
              />
              Coach
              <input
                type="radio"
                name="radio"
                id="checkbox-coach"
                value={setInputCoachRoleValue}
                onChange={handleOnChangeCoachRole}
              />
            </label>
            <div className="dashboard-add-user-names">
              <label className="dashboard-add-user-firstname" htmlFor="text">
                Prénom
                <input
                  className="user__form-input"
                  method="post"
                  type="text"
                  name="text"
                  id="firstname"
                  placeholder="Rodolphe"
                  value={setInputFirstnameValue}
                  onChange={handleOnChangeFirstname}
                />
              </label>
              <label className="dashboard-add-user-lasttname" htmlFor="text">
                Nom
                <input
                  className="user__form-input"
                  method="post"
                  type="text"
                  name="text"
                  id="lastname"
                  placeholder="Martin"
                  value={setInputLastnameValue}
                  onChange={handleOnChangeLastname}
                />
              </label>
              <label className="dashboard-add-user-email" htmlFor="text">
                Email
                <input
                  className="user__form-input"
                  method="post"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="rodolphe.martin@gmail.com"
                  value={setInputMailValue}
                  onChange={handleOnChangeMail}
                />
              </label>
            </div>
            <div className="dashboard-add-user-speciality">
              <h3 className="dashboard-add-user-speciality-title">Spécialités :</h3>
              {
                allSpecialities.map((specialityObject) => (
                  <label className="dashboard-add-user-speciality-item" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      name={specialityObject.name}
                      id={specialityObject.id}
                      value={specialityObject.id}
                      onChange={handleOnChangeSpeciality}
                    />
                    {specialityObject.name}
                  </label>
                ))
              }
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
};

export default DashboardManager;
