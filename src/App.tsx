import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import ReORi from './pages/ReORi';
import BeatVirus from './pages/BeatVirus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/re-o-ri" element={<ReORi />} />
          <Route path="/beat-virus" element={<BeatVirus />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
