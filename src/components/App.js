import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './Home';
import Onboard from './Onboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Onboard />} />
          <Route path="/editor" element={<Home />} />
          
        </Routes>
      </Router>
    );
  }
}

export default App;
