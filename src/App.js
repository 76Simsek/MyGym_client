import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Startseite from './Router/Startseite';
import Uebungen from './Router/Uebungen';
import Push from './Router/Push';
import Pull from './Router/Pull';
import Legs from './Router/Legs';
import AuS from './Router/AuS';
import BuR from './Router/BuR';
import AddUebung from './Router/AddUebung';
import AddPlan from './Router/AddPlan';
import About from './Router/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Startseite />} />
        <Route exact path='/Uebungen' element={<Uebungen />} />
        <Route exact path='/Push' element={<Push />} />
        <Route exact path='/Pull' element={<Pull />} />
        <Route exact path='/Legs' element={<Legs />} />
        <Route exact path='/AuS' element={<AuS />} />
        <Route exact path='/BuR' element={<BuR />} />
        <Route exact path='/AddUebung' element={<AddUebung />} />
        <Route exact path='/AddPlan' element={<AddPlan />} />
        <Route exact path='/About' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
