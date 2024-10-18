import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Taxonomy from './Taxonomy';
import Team from './Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="whole-body">
          <Sidebar />
          <div className="right-body">
            <Header />
            <div className="App-body">
              <div className="App-content">
                {/* Setup Routes */}
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/Taxonomy" element={<Taxonomy />} />
                  <Route path="/team" element={<Team />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
