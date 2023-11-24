import React from 'react';

import { Footer, Start, Plan } from '../components';

const App = () => {
  const footer_abstand = {
    height: '60px',
  };
  return (
    <div className='App'>
      <Start />
      <Plan />
      <div style={footer_abstand}></div>
      <Footer />
    </div>
  );
};



export default App;
