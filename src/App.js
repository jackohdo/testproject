import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi im Test</h1>
            <p>this works</p>
            <Person/>
      </div>
      );
      //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'it works  now'));
  }
}

export default App;
