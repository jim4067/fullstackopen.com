const express = require('express');

const app = express();

let persons = [
    {
        "name": "Arto Hellas",
        "number": "",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }  
]

app.get( '/' , (req, res) => {
    res.send("<h1>persons</h1>")
} );

app.get('/api/persons' , (req , res) => {
    res.json(persons);
} );

app.get('/info', (req, res) => {
    const persons_length = persons.length;
    const date = new Date();

    res.send(`<p>Phonebook has info for ${persons_length} people</p><p>${date}<p>`)
} );
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`running server on port ${PORT}`);
})