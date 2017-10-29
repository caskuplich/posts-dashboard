import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PostForm from './components/PostForm';
import NotFound from './components/NotFound';
import './App.css';

/**
 * App is a container component that wraps all the app components.
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Menu size='huge' inverted borderless>
            <Menu.Item header as={Link} to='/'>Posts Dashboard</Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/new" component={PostForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
