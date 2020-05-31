import React, { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Homer Simpson', number: '040-123456' },
    { name: 'Marge Simpson', number: '39-44-5323523' },
    { name: 'Lisa Simpson', number: '12-43-234345' },
    { name: 'Bart Simpson', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

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
      <Filter value={newName} persons={persons} displayFunc={displayFunc} / >

      <Personform addPerson ={addPerson} newname={newName} handlePersonadd={handlePersonadd} newNum={newNum}
       handleNumadd={handleNumadd} handleRepeat={handleRepeat} displayFunc={displayFunc} /> 


    </div>
  );
}

export default App