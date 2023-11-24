import React from 'react';

import { Footer, AddUebung } from '../components';

const Hinzufügen = () => {
  const footer_abstand = {
    height: '60px',
  };

  return (
    <div className='Ppl'>
      <AddUebung />

      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};

export default Hinzufügen;
