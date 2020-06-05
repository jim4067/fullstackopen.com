import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Personform from './components/Personform';
import Display from './components/Display';
import PersonService from './services/person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  const hook = () => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })

  }

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObect = {
      name: newName,
      number: newNum
    };
    axios.post('http://localhost:3001/persons', personObect)
    setPersons(persons.concat(personObect));
    setNewName("");
    setNewNum("");
  };


  const handlePersonadd = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };


  const handleNumadd = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value);
  }

  function handleRepeat() {
    persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist`) : newName);
  }


  return (
    <div>

      <h2>Phonebook</h2>
      <Filter value={newName} persons={persons} />

      <Personform addPerson={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
        handleNumadd={handleNumadd} handleRepeat={handleRepeat} />

      <h3> Numbers </h3>
      <Display persons={persons} />

    </div>
  );
}

export default App