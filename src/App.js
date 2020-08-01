import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Minorities from './components/Minorities';
import Suggestions from './components/Suggestions';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar/>
          <BrowserRouter>
              <Switch>
              <Route exact path="/research-website" component={HomePage} />
              <Route path="/research-website/minorities" component={Minorities} />
              <Route path="/research-website/suggestions" component={Suggestions} />
              </Switch>
          </BrowserRouter>
          <Footer/>

          </div>
      
    
  );
    
}

export default App;
