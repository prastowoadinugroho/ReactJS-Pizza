import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero/index';
import { GlobalStyle } from './globalStyle';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
    </Router>
  );
}

export default App;
