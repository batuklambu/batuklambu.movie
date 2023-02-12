import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageError from './components/PageError/PageError';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
