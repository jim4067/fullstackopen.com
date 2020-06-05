import React, { useState } from 'react';


const Filter = (props) => {

    const [search, setSearch] = useState("");

    const [filterDiplay, setFilterDisplay] = useState(props.persons);

    const handleChange = (event) => {

        let oldList = props.persons.map((person) => {
            return { name: person.name.toLowerCase(), number: person.number }
        })

        if (event !== "") {
            let newList = [];
            setSearch(event);

            newList = oldList.filter(person => person.name.includes(search.toLowerCase()));
            setFilterDisplay(newList)
        } else {
            setFilterDisplay(props.persons);
        }
    }
    return (
        <div>
            filter shown with <input onChange={event => handleChange(event.target.value)} />
            {filterDiplay.map((person, i) => <p key={i}>{person.name} <span>{person.number}</span></p>)}
        </div>
    );
}

export default Filter