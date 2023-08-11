// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import IronManGiphy from './views/ironmanItems/IronManGiphy';
import SearchGiphy from './views/searchGiphy/SearchGiphy';

function App() {
  const [setShowHome] = useState(true);

  return (
    <Router>
      <div>
        <h1>Welcome To Your Giphy</h1>
        <Routes>
          <Route path="/" element={<Home setShowHome={setShowHome} />} />
          <Route path="/ironman" element={<IronManGiphy />} />
          <Route path="/search" element={<SearchGiphy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
