import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Main from './Main';
import Movie from './Movie';
import Food from './Food';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/main">Main Blog</Link>{' '}
            <Link to="/movie">Favorite Movie</Link>{' '}
            <Link to="/food">Favorite Food</Link>{' '}
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/movie" component={Movie} />
          <Route path="/food" component={Food} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
