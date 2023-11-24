import React, { useState } from 'react';
import axios from 'axios';
import './addPlan.css';
import { useNavigate } from 'react-router-dom';
const url = 'https://mygymserver.onrender.com/gym';

function AddPlan() {
  const history = useNavigate();
  const [gym, setGym] = useState('Fit one');
  const [date, setDate] = useState('');
  const [plan, setPlan] = useState('Push');
  const kommentar = '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { gym, date, plan, kommentar };

    try {
      const response = await axios.post(url, data);

      console.log('Data inserted successfully:', response.data);
      console.log(gym, date, plan);
      history('/uebungen');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  return (
    <div className='Wrapper'>
      <div className='name'>
        <h1>Starte dein Training</h1>
      </div>
      <div className='formular'>
        <form onSubmit={handleSubmit}>
          <div className='gym_name'>
            <label htmlFor='gym_name'>Gym Name </label>
            <input
              placeholder='Fit One'
              type='text'
              id='gym'
              name='gym'
              value={gym}
              onChange={(e) => setGym(e.target.value)}
            />
          </div>
          {/* <div className='kommentar'>
              <label htmlFor='kommentar'>Kommentar </label>
              <input
                type='text'
                id='kommentar'
                name='kommentar'
                value={this.state.kommentar}
                onChange={this.handleInputChange}
              />
            </div> */}
          <br />
          <div>
            <label htmlFor='datePicker'>Datum </label>
            <br />
            <input
              type='date'
              id='date'
              name='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <br />
          <label htmlFor='dropdown'>Wählen Sie eine Option</label>
          <div className='dropdown'>
            {plan}
            <select
              id='dropdown'
              name='plan'
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value='Push'>Push</option>
              <option value='Pull'>Pull</option>
              <option value='Legs'>Legs</option>
              <option value='Arm und Schulter'>Arm und Schulter</option>
              <option value='Brust und Rücken'>Brust und Rücken</option>
            </select>
          </div>
          <br />

          <button className='btn' type='submit'>
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPlan;
