import React from 'react';

import { Footer, AddPlan } from '../components';

const Hinzufügen = () => {
  const footer_abstand = {
    height: '60px',
  };

  return (
    <div className='Ppl'>
      <AddPlan />

      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};

export default Hinzufügen;
