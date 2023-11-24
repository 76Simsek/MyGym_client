import React, { useEffect, useState } from 'react';
import { Push } from '../../index';
import axios from 'axios';

function PushBack() {
  const url = 'https://mygymserver.onrender.com/gym/Push';

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
        <Push
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

export default PushBack;
