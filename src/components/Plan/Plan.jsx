import React from 'react';
import './plan.css';
import { useNavigate } from 'react-router-dom';

import { bench, curl, lat, pull, squad } from '../../assets/bearbeit/bilder';

const Plan = () => {
  const history = useNavigate();

  function Push(e) {
    e.preventDefault();

    history('/Push');
  }

  function Pull(e) {
    e.preventDefault();

    history('/Pull');
  }

  function Legs(e) {
    e.preventDefault();

    history('/Legs');
  }

  function AuS(e) {
    e.preventDefault();

    history('/AuS');
  }

  function BuR(e) {
    e.preventDefault();

    history('/BuR');
  }

  return (
    <div className='MyGym_plan'>
      <button
        className='MyGmy_plan-push'
        style={{ backgroundImage: `url(${bench})` }}
        onClick={Push}
      >
        Push
      </button>

      <button className='MyGmy_plan-pull' style={{ backgroundImage: `url(${lat})` }} onClick={Pull}>
        Pull
      </button>

      <button
        className='MyGmy_plan-legs'
        style={{ backgroundImage: `url(${squad})` }}
        onClick={Legs}
      >
        Legs
      </button>

      <button className='MyGmy_plan-arms' style={{ backgroundImage: `url(${curl})` }} onClick={AuS}>
        Arme und Shulter
      </button>

      <button className='MyGmy_plan-Bnr' style={{ backgroundImage: `url(${pull})` }} onClick={BuR}>
        Brust und Rücken
      </button>
    </div>
  );
};

export default Plan;
