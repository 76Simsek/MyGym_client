import React from 'react';
import './footer.css';
import { Profil, Hinzufügen, Verlauf, info } from '../../assets/Icons/Icons';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const history = useNavigate();

  function handleSubmitu(e) {
    e.preventDefault();

    history('/uebungen');
  }

  function Add(e) {
    e.preventDefault();

    history('/AddPlan');
  }

  function handleSubmitp(e) {
    e.preventDefault();

    history('/');
  }

  function handleSubmiti(e) {
    e.preventDefault();

    history('/About');
  }

  return (
    <div>
      <div className='MyGym__footer'>
        <div className='MyGym__footer-Profil'>
          <button onClick={handleSubmitp}>
            <img src={Profil} alt='Profil' />
            <p>Profil</p>
          </button>
        </div>

        <div className='MyGym__footer-Hinzufügen'>
          <button>
            <img src={Hinzufügen} alt='Hinzufügen' onClick={Add} />
            <p>Hinzufügen</p>
          </button>
        </div>

        <div className='MyGym__footer-verlauf'>
          <button onClick={handleSubmitu}>
            <img src={Verlauf} alt='Verlauf' />
            <p>Verlauf</p>
          </button>
        </div>

        <div className='MyGym__footer-info'>
          <button onClick={handleSubmiti}>
            <img src={info} alt='info' />
            <p>About</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
