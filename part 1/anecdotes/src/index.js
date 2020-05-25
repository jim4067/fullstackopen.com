import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//let [votes, setVotes] = useState({ 0: 0, 1: 0, 2:0 , 3: 0, 4:0 , 5:0 });

const App = (props) => {
  let [selected, setSelected] = useState(0);
  let [votes, setVotes] = useState(anecdotes.map( () => 0 ));

  
  const showRandom = () => {
    setSelected(selected = Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => {
    const copy = {...votes};
    copy[selected] = copy[selected] + 1;
    setVotes(copy);

    
  };

  const largest = (arr, n) => {
    let i;

    
    let max = arr[0];

    for (i = 1; i < n; i++)
      if (arr[i] > max)
        max = arr[i];

    return max;
  };


  console.log("most votes are", largest(votes, 6));


  let max = largest(votes, anecdotes.length);


  return (
    <div>

      <h1> Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>{" "}
      <button onClick={showRandom}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p> {props.anecdotes[max]}</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))