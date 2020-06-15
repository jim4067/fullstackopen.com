import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Personform from './components/Personform';
import Display from './components/Display';
import PersonService from './services/person';
import Notification from './components/Notification';


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

  const listOfNames = persons.map(person => person.name.toLowerCase())
  const nameLowerCase = newName.toLowerCase()

  if (listOfNames.includes(nameLowerCase)) {
    const confirmation = window.confirm(`${newName} is already part of the phonebook. Replace the existing number with a the one provided?`)

    // if user selects cancel, then stop 
    if (!confirmation) {
      return null
    }
    // get existing person object
    const existingObject = persons.filter(person => {
      return person.name.toLowerCase() === nameLowerCase
    })[0]

    // store id of personObject to be updated
    const id = existingObject.id

    // create new object for this person which has updated number
    const newObject = {
      ...existingObject,
      number: newNum
    }
    PersonService.update(id, newObject)
      .then(updatedPerson => {
        // the update was successful take response data and update state variable
        const updatedPersons = persons.map(person =>
          person.id === id ? updatedPerson : person)
        setPersons(updatedPersons)

        // add message to inform user the update was successful


        // reset form inputs
        setNewName('')
        setNewNum('')
      })
      .catch(error => {
        console.log(error)
      })


    // prevent application from executing any further
    return null
  }

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
        console.log("shit happened", err)
      })
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter value={newName} persons={persons} />

      <Personform addPerson={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
        handleNumadd={handleNumadd} />

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