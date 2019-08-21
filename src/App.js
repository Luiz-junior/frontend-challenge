import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      {/* <Route path="" component="" />  */}
    </BrowserRouter>
  );
}

export default App;
