// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Imports
import './style.scss';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeFr from 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// dayjs
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.locale('fr');
dayjs.extend(updateLocale);

// == Composant
const Members = ({ getAllMembers, allMembers }) => {
  useEffect(getAllMembers, []);
  // console.log('allMembers', allMembers);
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
        <li>inscrit depuis le</li>
        <li>Prenom</li>
        <li>nom</li>
        <li>email</li>
      </ul>
      {
          allMembers.map((memberObject) => (
            <ul key={memberObject.id} className="dashboard-list-info-item">
              <li>{dayjs(memberObject.createdAt).tz('Europe/Paris').locale('fr').format('DD MMMM YYYY')}</li>
              <li>{memberObject.firstname}</li>
              <li>{memberObject.lastname}</li>
              <li>{memberObject.email}</li>

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
