import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      Hello From App
      <Router>
        <NavBar />
      </Router>
    </div>
  );
};

export default App;