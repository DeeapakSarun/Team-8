import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Taxonomy from './Taxonomy';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Sidebar />
        <div className="App-content">
          <Main />
          <Taxonomy />  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
