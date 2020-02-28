import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Test', age:10 },
      { name: 'test4', age:12 },
      { name: 'test2', age:15 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>{
    console.log('was clicked');

    this.setState({
      persons : [
        { name: 'Jack', age:10 },
        { name: 'test4', age:12 },
        { name: 'test2', age:434 }
      ] 
    })
  }

  nameChangeHandler = (event) => {

    this.setState({
      persons : [
        { name: 'Jack', age:10 },
        { name: event.target.value, age:12 },
        { name: 'test2', age:434 }
      ] 
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi im Test</h1>
            <p>this works</p>
            <button 
              style={style}
              onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      );
      //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'it works  now'));
  }
}

export default App;
