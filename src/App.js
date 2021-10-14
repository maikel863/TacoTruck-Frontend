import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';

import './App.css';

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
    </Switch>

    </div>
    </Router>
  );
}

export default App;
