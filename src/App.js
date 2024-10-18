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
      <div className="whole-body">
        <Sidebar />
        <div className="right-body">
          <Header />
          <div className="App-body">
            <div className="App-content">
          <Main />
              <Taxonomy />  
        </div>
      </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
