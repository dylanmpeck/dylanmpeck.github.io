import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import ReORi from './pages/ReORi';
import BeatVirus from './pages/BeatVirus';
import VRBike from './pages/VRBike';
import Wolf3D from './pages/Wolf';
import Pompadroid from './pages/Pompadroid';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/re-o-ri" element={<ReORi />} />
          <Route path="/beat-virus" element={<BeatVirus />} />
          <Route path="/vr-bike" element={<VRBike />} />
          <Route path="/wolf3d" element={<Wolf3D />} />
          <Route path="/pompadroid" element={<Pompadroid />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
