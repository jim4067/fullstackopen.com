import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Homer Simpson" }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObect = {
      name: newName
    };
    setPersons(persons.concat(personObect));
    setNewName("");

  };

  const handlePersonadd = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const displayFunc = persons.map((nameparam) =>
    <p key={nameparam.name}>
      {nameparam.name}
    </p>
  );


  function handleRepeat() {
    persons.filter((nameparam) => newName === nameparam.name ? alert(`${newName} already exist`) : newName);
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonadd} />
        </div>
        <div>
          <button onClick={handleRepeat} type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {displayFunc}

    </div>
  );
};

export default App