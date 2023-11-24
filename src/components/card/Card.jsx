import React, { useEffect, useState } from 'react';
import { Verlauf } from '../';
import axios from 'axios';
// import { response } from 'express';

function Card() {
  const url = 'https://mygymserver.onrender.com/gym';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen der Daten:', error);
      });
  }, []);

  return (
    <div className='container'>
      {data.map((item) => (
        <Verlauf
          gym={item.gym}
          Udate={item.date}
          date={item.datum}
          plan={item.plan}
          pic={item.planimg}
          id={item.gym_id}
          kommentar={item.kommentar}
        />
      ))}
    </div>
  );
}

export default Card;
