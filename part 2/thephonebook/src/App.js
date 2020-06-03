import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  const hook = () => {
    console.log("i have no idea what i am doing");
    axios
      .get('https://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }

  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObect = {
      name: newName,
      number: newNum
    };
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

  const displayFunc = persons.map((nameparam) =>
    <p key={nameparam.name}>
      {nameparam.name} {nameparam.number}
    </p>
  );

  function handleRepeat() {
    persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist`) : newName);
  }



  return (
    <div>

      <h2>Phonebook</h2>
      <Filter value={newName} persons={persons} displayFunc={displayFunc} />

      <Personform addPerson={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
        handleNumadd={handleNumadd} handleRepeat={handleRepeat} displayFunc={displayFunc} />

    </div>
  );
}

export default App