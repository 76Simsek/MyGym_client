import React, { useEffect, useState } from 'react';
import { AuS } from '../..';
import axios from 'axios';

function Ppl_back() {
  const url = 'https://mygymserver.onrender.com/gym/Arm%20und%20Schulter';

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
        <AuS
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

export default Ppl_back;
