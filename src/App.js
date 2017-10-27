import React, { Component } from 'react';
import HeaderMenu from './components/HeaderMenu';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderMenu />
        <Dashboard />
      </div>
    );
  }
}

export default App;
