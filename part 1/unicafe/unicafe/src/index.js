import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [good , setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad , setBad] = useState(0);
  
  //the points for calculating average
  const [bad_point , setBad_point] = useState(0);
  const [good_point , setGood_point] = useState(0);
  const [neutral_point, setNeutral_point] = useState(0);

  const handleGood = () => {
    setGood(good + 1 );
    setGood_point(good_point + 1);
  };
  const handleNeutral = () => {
    setNeutral ( neutral + 1 );
    setNeutral_point(neutral_point + 0);
  };
  const handleBad = () => {
    setBad ( bad + 1 );
    setBad_point (bad_point - 1 );
  };

  //do not have to type the addition again 
  const all = good + neutral + bad;
  
  

  console.log("good " , good, "bad ", bad,   "bad_point ", bad_point, "all" , all);

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <button onClick = {handleGood}>good</button>
      <button onClick = {handleNeutral}>neutral</button>
      <button onClick = {handleBad}  >bad</button>
      <h1>statistics</h1>
      <Display text = "Good"  stats = {good} />
      <Display text = "Neutral"  stats = {neutral} />
      <Display text = "Bad"  stats = {bad} />
      <Display text = "All" stats = {all } />
      <Display text = "Average" stats = {  (bad_point + good_point ) / all } />
      <Display text = "Positive" stats = {(good/all)*100} />
      
    </div>
  );
};

const Display = (props) => {

  return (
    <div>
      {props.text} {props.stats}
    </div>
  );
};


ReactDOM.render(<App /> ,document.getElementById ('root') );