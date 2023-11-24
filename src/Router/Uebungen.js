import React from 'react';

import { Footer, Card } from '../components';

const Uebungen = () => {
  const Verlauf_style = {
    marginLeft: '0.8rem',
    marginTop: '50px',
    marginBottom: '5rem',
    fontFamily: 'var(--font-family)',
  };
  const footer_abstand = {
    height: '60px',
  };
  return (
    <div className='Uebungen'>
      <div style={Verlauf_style}>
        <h1>Verlauf</h1>
      </div>
      <Card />
      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};

export default Uebungen;
