import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Minorities from "./components/Minorities";
import Suggestions from "./components/Suggestions";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sources from "./components/Sources";

import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/minorities" component={Minorities} />
          <Route path="/suggestions" component={Suggestions} />
          <Route path="/sources" component={Sources} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
