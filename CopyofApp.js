import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons : [
        { name: 'Test', age:10 },
        { name: 'test4', age:12 },
        { name: 'test2', age:15 }
      ],
      otherState: 'some other value'
  });

  console.log(personsState);
  
  const switchNameHandler = () =>{
    console.log('was clicked');

    setPersonsState({
      persons : [
        { name: 'Jack', age:10 },
        { name: 'test4', age:12 },
        { name: 'test2', age:434 }
      ] 
    })
  };

    return (
      <div className="App">
        <h1>Hi im Test</h1>
            <p>this works</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
      );
      //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'it works  now'));
};

export default app;
