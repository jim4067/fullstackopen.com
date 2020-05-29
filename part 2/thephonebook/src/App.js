import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: "Homer Simpson" }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObect = {
      name : newName
    };
    setPersons(persons.concat(personObect));
    setNewName("");
  };
  
  const handlePersonadd = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonadd} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((nameparam) => 
      <p key = {persons.name} >
        {nameparam.name}
      </p>
      )}
    </div>
  )
}

export default App