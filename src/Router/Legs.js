import React from 'react';

import { Footer, Legsback } from '../components';

const Pläne = () => {
  const Pläne_style = {
    marginLeft: '0.8rem',
    marginTop: '50px',
    marginBottom: '5rem',
    fontFamily: 'var(--font-family)',
  };
  const footer_abstand = {
    height: '60px',
  };

  return (
    <div className='Ppl'>
      <div style={Pläne_style}>
        <h1>Pläne</h1>
      </div>
      <Legsback />

      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};

export default Pläne;
