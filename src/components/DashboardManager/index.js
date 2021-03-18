import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateSlot from 'src/containers/CreateSlote';

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
  showAllCoachs,
  getAllMembers,
  getAllCoachs,
  getAllSpecialities,
  allSpecialities,
  isChecked,
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
    if (setInputFirstnameValue
         && setInputLastnameValue
         && setInputMailValue
         && (setInputCoachRoleValue || setInputMemberRoleValue)) {
      onSubmitUserForm();
    }
    else {
      alert('Veuillez remplir tous les champs');
    }
  };

  useEffect(getAllCoachs, []);
  useEffect(getAllMembers, []);
  useEffect(getAllSpecialities, []);

  return (
    <div className="dashboard">
      <div className="dashboard-content-left">
        <div className="dashboard-show-members">
          <span className="dashboard-show-members-title">{showAllMembers.length} Adhérents</span>
          <Link to="/members" className="dashboard-link">Voir les adhérents </Link>
        </div>
        <div className="dashboard-show-coachs">
          <span className="dashboard-show-coachs-title">{showAllCoachs.length} Coachs</span>
          <Link to="/coachs" className="dashboard-link">Voir les coachs</Link>
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
                // checked={!isChecked}
                type="radio"
                name="radio"
                id="checkbox-member"
                value={setInputMemberRoleValue}
                onChange={handleOnChangeMemberRole}
              />
              Coach
              <input
                // checked={!isChecked}
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
                  <label className="dashboard-add-user-speciality-item" htmlFor="checkbox" key={specialityObject.id}>
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
        <CreateSlot />
      </div>
    </div>
  );
};

DashboardManager.defaultProps = {
  setInputFirstnameValue: '',
  setInputLastnameValue: '',
  setInputMemberRoleValue: '',
  setInputCoachRoleValue: '',
  setInputSpecialityValue: '',
  setInputMailValue: '',
};

DashboardManager.propTypes = {
  allSpecialities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  setInputFirstnameValue: PropTypes.string,
  setInputLastnameValue: PropTypes.string,
  setInputMemberRoleValue: PropTypes.string,
  setInputCoachRoleValue: PropTypes.string,
  setInputSpecialityValue: PropTypes.array,
  setInputMailValue: PropTypes.string,
  onChangeInputFirstnameValue: PropTypes.func.isRequired,
  onSubmitUserForm: PropTypes.func.isRequired,
  onChangeInputLastnameValue: PropTypes.func.isRequired,
  onChangeInputMemberRoleValue: PropTypes.func.isRequired,
  onChangeInputCoachRoleValue: PropTypes.func.isRequired,
  onChangeInputSpecialityValue: PropTypes.func.isRequired,
  onChangeInputMailValue: PropTypes.func.isRequired,
  showAllMembers: PropTypes.array.isRequired,
  showAllCoachs: PropTypes.array.isRequired,
  getAllMembers: PropTypes.func.isRequired,
  getAllCoachs: PropTypes.func.isRequired,
  getAllSpecialities: PropTypes.func.isRequired,
};

export default DashboardManager;
