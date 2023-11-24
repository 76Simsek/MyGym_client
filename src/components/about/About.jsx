import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='Wrapper'>
      <h1 className='h1w'>About</h1>
      <div className='MyGym'>
        <h2 className='about_h2'>Über MyGym</h2>
        <h4 className='about_h4'>
          Willkommen in meiner Fitness-App, die von mir, Mustafa Simsek entwickelt wurde! Meine App
          ist ein zurzeit unfertiges Projekt, das darauf abzielt, Ihnen dabei zu helfen, Ihr
          Training zu tracken und Ihre Gainz zu Maximieren. Diese App Wurde mit React Erstellt.
        </h4>
      </div>
      <div className='Über Mich'>
        <h2 className='about_h2'>Über Mich</h2>
        <h4 className='about_h4'>
          Ich habe meinen Bildungsweg an der HTL Wien West absolviert, wobei meine Ausbildung im
          Bereich Informationstechnologie mit Schwerpunkt auf Medientechnik war.
        </h4>
      </div>
      <div>
        <h2 className='about_h2'>Fortschrit</h2>
        <h4 className='about_h4'>
          Zurzeit kann die App Trainingseinheiten speichern und wiedergeben.
        </h4>
      </div>
    </div>
  );
};

export default About;
