import React from 'react';
import PropTypes from 'prop-types';

import Gwen from 'src/assets/pictures-team/Gwen.png';
import Laurent from 'src/assets/pictures-team/Laurent.png';
import Sountid from 'src/assets/pictures-team/Soun.png';
import Julien from 'src/assets/pictures-team/Julien.png';
import Mathilde from 'src/assets/pictures-team/Mathilde.png';

// import logoGithub from 'src/assets/pictures/logoGit.png';
// import logoLinkedin from 'src/assets/pictures/logoLinkedin.png';

import './style.scss';

const Team = () => (
  <div className="box">
    <div className="title">
      <a href="#ancre"><h1>LA TEAM</h1></a>
    </div>
    <div className="team">
      <div className="team-box">
        <div>
          <img className="team-box-img" src={Laurent} alt="laurent" />
          <div className="team-box-infos">
            <p>Laurent SERALINE</p>
            <p><strong>Scrum Master</strong></p>
          </div>
        </div>
      </div>
      <div className="team-box">
        <div>
          <img className="team-box-img" src={Gwen} alt="gwen" />
          <div className="team-box-infos">
            <p>Gwenaël COTTON</p>
            <p id="ancre"><strong>Lead dev-front</strong></p>
          </div>
        </div>
      </div>
      <div className="team-box">
        <div>
          <img className="team-box-img" src={Sountid} alt="sountid" />
          <div className="team-box-infos">
            <p>Sountid LY</p>
            <p><strong>Lead dev-back</strong></p>
          </div>
        </div>
      </div>
      <div className="team-box">
        <div>
          <img className="team-box-img" src={Julien} alt="Julien" />
          <div className="team-box-infos">
            <p>Julien BLOTIERE</p>
            <p><strong>Git Master</strong></p>
          </div>
        </div>
      </div>
      <div className="team-box">
        <div>
          <img className="team-box-img" src={Mathilde} alt="mathilde" />
          <div className="team-box-infos">
            <p>Mathilde FRERE</p>
            <p><strong>Product Owner</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Team.propTypes = {};
export default Team;
