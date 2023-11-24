import React, { useEffect, useState } from 'react';
import '../ppl.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { bench, curl, lat, pull, squad } from '../../assets/bearbeit/bilder';

const Pull = ({ gym, date, plan, pic, id, kommentar }) => {
  const history = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [workout, setWorkout] = useState([]);

  const Ddate = date;
  const GId = id;
  const AddU = () => {
    // Die Variable an die nächste Seite übergeben
    localStorage.setItem('Ddate', Ddate);
    localStorage.setItem('GId', GId);

    // Zur nächsten Seite wechseln
    history('/AddUebung');
  };

  useEffect(() => {
    axios
      .get(`https://mygymserver.onrender.com/workout/${id}`)
      .then((response) => {
        setWorkout(response.data);
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
  }, []);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='wrapper'>
      {isPopupVisible && (
        <div className='overlay' onClick={closePopup}>
          <div className='popup'>
            <div className='popup-content'>
              <span onClick={closePopup} className='close-button'>
                &times;
              </span>
              <h3>{plan}</h3>
              <h4>{date}</h4>

              {workout.map((item) => (
                <div className='popup_p'>
                  <h4>{item.übung}</h4>
                  <div className='sets'>
                    <p>{item.wdh1}</p>
                    <p>{item.wdh2}</p>
                    <p>{item.wdh3}</p>
                    <p>{item.wdh4}</p>
                    <p>{item.wdh5}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className='btn' onClick={AddU}>
              Übung Hinzufügen
            </button>
          </div>
        </div>
      )}
      <div className='card' onClick={togglePopup}>
        <div className='card-header'>
          <h2>{gym}</h2>
          <div className='card-content'>
            <h3>{date}</h3>
            <h3>{plan}</h3>
            <h4>{kommentar}</h4>
            {/* <img src={`../../assets/bearbeit/${pic}.png`} alt={`${pic}`} /> */}
            {/* <img src={bench} width='100' height='50' alt={imageSrc} /> */}
            {/* <img src={'../../assets/bearbeit/bench.png'} alt={`${pic}`} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pull;
