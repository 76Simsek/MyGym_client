import React from 'react';

import { Footer, About } from '../components';

const Hinzufügen = () => {
  const footer_abstand = {
    height: '60px',
  };

  return (
    <div className='Ppl'>
      <About />

      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};

export default Hinzufügen;
