import React, { useEffect, useState } from 'react';
import { Pull } from '../../index';
import axios from 'axios';

function PullBack() {
  const url = 'https://mygymserver.onrender.com/gym/Pull';

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
        <Pull
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

export default PullBack;
