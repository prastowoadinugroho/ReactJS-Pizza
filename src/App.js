import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero/index';
import Products from './components/Products';
import { productData, productData2 } from './components/Products/data';
import { GlobalStyle } from './globalStyle';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for you' data={productData2}/>
      <Footer/>
    </Router>
  );
}

export default App;
