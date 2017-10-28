import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Dashboard from './components/Dashboard';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderMenu />
          <Route exact path="/" component={Dashboard} />
          <Route path="/new" component={PostForm} />
        </div>
      </Router>
    );
  }
}

export default App;
