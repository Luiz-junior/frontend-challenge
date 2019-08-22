import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Details from './components/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/details" component={Details} />
      {/* <Route path="" component="" />  */}
    </BrowserRouter>
  );
}

export default App;
