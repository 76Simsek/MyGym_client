import React, { useState } from 'react';
import axios from 'axios';
import './addUebung.css';
import { useNavigate } from 'react-router-dom';

const url = 'https://mygymserver.onrender.com/workout';

function AddUebung() {
  const date = localStorage.getItem('Ddate');
  const gym_id = localStorage.getItem('GId');

  // const date = Ddate;
  // const gym_id = GId;
  const [übung, setübung] = useState('');
  const [repw1, setRepw1] = useState(null);
  const [repw2, setRepw2] = useState(null);
  const [repw3, setRepw3] = useState(null);
  const [repw4, setRepw4] = useState(null);
  const [repw5, setRepw5] = useState(null);
  const [weightw1, setWeightw1] = useState(null);
  const [weightw2, setWeightw2] = useState(null);
  const [weightw3, setWeightw3] = useState(null);
  const [weightw4, setWeightw4] = useState(null);
  const [weightw5, setWeightw5] = useState(null);

  const history = useNavigate();

  // function zurück(e) {
  //   e.preventDefault();

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      gym_id,
      übung,
      weightw1,
      repw1,
      weightw2,
      repw2,
      weightw3,
      repw3,
      weightw4,
      repw4,
      weightw5,
      repw5,
      date,
    };

    try {
      const response = await axios.post(url, data);

      console.log('Data inserted successfully:', response.data);
      console.log(
        date,
        übung,
        repw1,
        weightw1,
        repw2,
        weightw2,
        repw3,
        weightw3,
        repw4,
        weightw4,
        repw5,
        weightw5,
      );
      history('/uebungen');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div className='Wrapper'>
      {date}
      <br />
      {gym_id}
      <div className='name'>
        <h1>Gib eine Übung ein</h1>
      </div>
      <div className='formular'>
        <form onSubmit={handleSubmit}>
          <div className='Übungen'>
            <label htmlFor='datePicker'>Übung </label>
            <input
              type='text'
              id='übung'
              name='übung'
              value={übung}
              onChange={(e) => setübung(e.target.value)}
            />

            <div className='wdh'>
              <div>
                <label htmlFor='datePicker'>1. Set: </label>
              </div>

              <div>
                <input
                  type='number'
                  id='repw1'
                  name='repw1'
                  value={repw1}
                  onChange={(e) => setRepw1(e.target.value)}
                />
                x
                <input
                  type='number'
                  id='weightw1'
                  name='weightw1'
                  value={weightw1}
                  onChange={(e) => setWeightw1(e.target.value)}
                />
                KG
              </div>
            </div>
            <div className='wdh'>
              <div>
                <label htmlFor='datePicker'>2. Set: </label>
              </div>

              <div>
                <input
                  type='number'
                  id='repw2'
                  name='repw2'
                  value={repw2}
                  onChange={(e) => setRepw2(e.target.value)}
                />
                x
                <input
                  type='number'
                  id='weightw2'
                  name='weightw2'
                  value={weightw2}
                  onChange={(e) => setWeightw2(e.target.value)}
                />
                KG
              </div>
            </div>
            <div className='wdh'>
              <div>
                <label htmlFor='datePicker'>3. Set: </label>
              </div>

              <div>
                <input
                  type='number'
                  id='repw3'
                  name='repw3'
                  value={repw3}
                  onChange={(e) => setRepw3(e.target.value)}
                />
                x
                <input
                  type='number'
                  id='weightw3'
                  name='weightw3'
                  value={weightw3}
                  onChange={(e) => setWeightw3(e.target.value)}
                />
                KG
              </div>
            </div>
            <div className='wdh'>
              <div>
                <label htmlFor='datePicker'>4. Set: </label>
              </div>

              <div>
                <input
                  type='number'
                  id='repw4'
                  name='repw4'
                  value={repw4}
                  onChange={(e) => setRepw4(e.target.value)}
                />
                x
                <input
                  type='number'
                  id='weightw4'
                  name='weightw4'
                  value={weightw4}
                  onChange={(e) => setWeightw4(e.target.value)}
                />
                KG
              </div>
            </div>
            <div className='wdh'>
              <div>
                <label htmlFor='datePicker'>5. Set: </label>
              </div>

              <div>
                <input
                  type='number'
                  id='repw5'
                  name='repw5'
                  value={repw5}
                  onChange={(e) => setRepw5(e.target.value)}
                />
                x
                <input
                  type='number'
                  id='weightw5'
                  name='weightw5'
                  value={weightw5}
                  onChange={(e) => setWeightw5(e.target.value)}
                />
                KG
              </div>
            </div>
          </div>

          <button className='btn' type='submit'>
            Absenden
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUebung;
