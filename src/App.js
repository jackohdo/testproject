import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id: 'sdfg', name: 'Test', age:10 },
      { id: 'fhjfg', name: 'test4', age:12 },
      { id: 'trye', name: 'test2', age:15 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(x => {
      return x.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons });
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={() => this.nameChangeHandler(event, person.id)} />
            })
          }
       </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi im Test</h1>
            <p>this works</p>
            <button 
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
      </div>
      );
      //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'it works  now'));
  }
}

export default App;
