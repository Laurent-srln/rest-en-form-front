// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// == Composant
const Members = ({ getAllMembers, allMembers }) => {
  useEffect(getAllMembers, []);
  console.log(allMembers);
  return (
    <div className="members">
      <h1 className="members__title">Listing des adhérents</h1>
      <p className="members__number">{allMembers.length} adhérents</p>
      <div>
        <input
          className="members__search"
          placeholder="rechercher un membre"
          type="text"
          name=""
          id=""
        />
      </div>
      <ul className="dashboard-list-info-item">
        <li>inscrit depuis</li>
        <li>Prenom</li>
        <li>nom</li>
      </ul>
      {
          allMembers.map((memberObject) => (
            <ul key={memberObject.id} className="dashboard-list-info-item">
              <li>{memberObject.createdAt}</li>
              <li>{memberObject.firstname}</li>
              <li>{memberObject.lastname}</li>
            </ul>
          ))
      }
    </div>
  );
};

// == Props Validation
Members.propTypes = {
  getAllMembers: PropTypes.func.isRequired,
  allMembers: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Members;
