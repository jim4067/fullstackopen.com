import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Personform from './components/Personform';
import Display from './components/Display';
import PersonService from './services/person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  //get data from the server and update DOM if something changes
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
      .then(response => {
        setPersons(persons.concat(response))
        setNewName("");
        setNewNum("");
      })
  };


  const handlePersonadd = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };


  const handleNumadd = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value);
  }

  //the function that alerts when entering duplicate values
  function handleRepeat() {
    persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist`) : newName);
  }

  /*
  //the function that will be used for deleting users
  const handleDelOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const person = persons.find( p => p.id === id)
    const changedNote = { ...person }
  
    axios.delete(url, changedNote).then(response => {
      setPersons(persons.map(p => p.id !== id ? p : response.data))


    const person = persons.filter( perPar => newName === perPar.name execute function )
    console.log(" find person" , person);

    })
  }
  */

  //the function that will be used for DELETING users
  //PSA !When you setNotes using the response received directly things break things.
  //instead you map the data returned using a function. USE A FUNCTION!!!!!
  function handleDelOf(id) {
    console.log("handle deletion of ", persons);

    PersonService
      .delThis(id)
      .then(res => {
        console.log(res, " might have been deleted")
        setPersons(persons.map(perParam => perParam.id !== id ? perParam : res.data))
      })
      .catch(err => {
        console.log("shot happened", err)
      })
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter value={newName} persons={persons} />

      <Personform addPerson={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
        handleNumadd={handleNumadd} handleRepeat={handleRepeat} />

      <h3> Numbers </h3>

      {persons.map(personParam =>
        <div key={personParam.id}>
          <Display key={personParam.id} name={personParam.name} number={personParam.number} />
          <button onClick={() => handleDelOf(personParam.id)}>delete</button>
        </div>
      )}

    </div>
  );
}

export default App;