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
    PersonService
            .create(personObect)
            .then( response => {
              setPersons(persons.concat(response) )
              setNewName("");
              setNewNum("");
            } )
  };


  const handlePersonadd = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };


  const handleNumadd = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value);
  }

  /*the function that alerts when entering dulicate values
  function handleRepeat() {
    persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist`) : newName);
  }
  */
 function handleRepeat (id) {
   const url = `http://localhost:3001/persons/${id}`;
   const person = persons.find( personparam => personparam.id === id);
   const changedPerson = {...persons}

   console.log('what the hell does the console.log return', person)
   persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist,replace it`) : newName);
   axios.put(url, changedPerson).then(response => {
    setPersons(persons.map(personParam => personParam.id !== id ? person : response.data))
  })
 }

  //the function that will be used for deleting users
  const handleDelOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const person = persons.find( p => p.id === id)
    const changedNote = { ...person }
  
    axios.delete(url, changedNote).then(response => {
      setPersons(persons.map(p => p.id !== id ? p : response.data))
    })
  }


  return (
    <div>

      <h2>Phonebook</h2>
      <Filter value={newName} persons={persons} />

      <Personform addPerson={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
        handleNumadd={handleNumadd} handleRepeat={handleRepeat(persons.id)} />

      <h3> Numbers </h3>
      <Display persons={persons} handleDel={ () => handleDelOf(persons.id)} />

    </div>
  );
}

export default App