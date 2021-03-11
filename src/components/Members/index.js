// == Import npm
import React, { useEffect } from 'react';

// == Imports
import './style.scss';

// == Composant
const Members = ({getAllMembers, allMembers }) => {
  useEffect(getAllMembers, []);
  return (
    <div className="members">
      <h1 className="members__title">Listing des adhérents</h1>
      <p className="members__number">{allMembers.length} adhérents</p>
      <div>
        <input
          className="members__search"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

// == Props Validation

// == Export
export default Members;
