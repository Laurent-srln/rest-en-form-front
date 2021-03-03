// == Import npm
import React from 'react';

// == Imports
import CoachComment from './CoachComment';
import './style.scss';

// == Composant
const Training = () => (
  <div className="training">
    <div className="training__icons">
      <img
        className="bubble"
        src="https://img2.freepng.fr/20180617/pil/kisspng-grow-around-speech-balloon-text-clip-art-conversation-bubble-5b26b2ea357129.2881425615292628262189.jpg"
        alt=""
      />
      <img
        className="pencil"
        src="https://cdn.pixabay.com/photo/2016/03/31/19/15/crayon-1294842_960_720.png"
        alt=""
      />
    </div>
    <p className="training__date">Vendredi 2 février</p>
    <p className="training__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis quod illo, consequatur soluta, reprehenderit voluptas veritatis amet officia in fugit magnam, impedit id magni? Doloremque iusto illo aut adipisci?</p>
    <div className="training__health">
      <p className="amount">Poids : 84 kg</p>
      <span className="amount"> / </span>
      <p className="amount">Masse hydrique : 58 %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse musculaire : 78 %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse osseuse : 17 %</p>
      <span className="amount"> / </span>
      <p className="amount">Masse grasse : 5 %</p>
    </div>
    <CoachComment />
    <button
      type="button"
      className="training__button"
    >
      Voir moins
    </button>
  </div>
);

// == Props Validation

// == Export
export default Training;
