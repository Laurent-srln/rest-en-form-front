// == Import npm
import React from 'react';

// == Imports
import './style.scss';

// == Composant
const CoachComment = () => (
  <div className="coach-comment">
    <div className="coach-comment__meta">
      <img
        className="coach-comment__meta--img"
        src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507-980x654.jpg"
        alt=""
      />
      <p className="coach-comment__meta--info">
        <span className="author">Jean</span>
        <span> - </span>
        <span className="date">Mardi 6 février</span>
        <span> - </span>
        <span className="time">15h13</span>
      </p>
    </div>
    <p className="coach-comment--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, vero rem doloribus sapiente accusantium vitae ad quidem veniam saepe cum reiciendis in amet, distinctio dicta labore est! Cumque, ipsum doloremque.</p>
  </div>
);

// == Props Validation

// == Export
export default CoachComment;
