import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DrivenPiles from './components/DrivenPiles';
import BoredPiles from './components/BoredPiles';
import ScrewPiles from './components/ScrewPiles';


const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Axial Capacity Calculator using CPT</h1>
          <h2>University of Western Australia</h2>
        </header>

        <div className="tabs">
          <Link to="/driven">
            <button>Driven Piles</button>
          </Link>
          <Link to="/bored">
            <button>Bored / CFA Piles</button>
          </Link>
          <Link to="/screw">
            <button>Screw Piles</button>
          </Link>
        </div>

        <div className="tab-content">
          <Routes>
            <Route path="/driven" element={<DrivenPiles />} />
            <Route path="/bored" element={<BoredPiles />} />
            <Route path="/screw" element={<ScrewPiles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
