import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';

import './App.css';
import TacoContainer from './components/TacoContainer';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="navbar">
        <NavBar />
        </div>

    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/tacos">
        <TacoContainer />
      </Route>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
