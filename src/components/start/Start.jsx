import React from 'react'
import './start.css'
import { useNavigate } from 'react-router-dom';

const Start = () => {

  const history = useNavigate();
  function train() {
    history('/AddPlan')
  }
  return (
    <div className='MyGym_start'>
      <div className='MyGym_start_name'>
        <h1> Hallo Mustafa</h1>
        <h3>Gib dein Training ein</h3>
      </div>
      <div className='MyGym_start_button'>
        <button onClick={train} type='button'>Beginne jetzt dein Training</button>
      </div>
    </div>
  );
}

export default Start;
