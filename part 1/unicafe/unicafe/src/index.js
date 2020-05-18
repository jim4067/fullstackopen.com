import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [good , setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad , setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1 );
  };
  const increaseNeutral = () => {
    setNeutral ( neutral + 1 );
  };
  const increaseBad = () => {
    setBad ( bad + 1 );
  };
  
  console.log("good " , good, "neutral " , neutral, "bad ", bad);

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <button onClick = {increaseGood}>good</button>
      <button onClick = {increaseNeutral}>neutral</button>
      <button onClick = {increaseBad} >bad</button>
      <h1>statistics</h1>
      <Display text = "good"  stats = {good} />
      <Display text = "neutral"  stats = {neutral} />
      <Display text = "bad"  stats = {bad} />
      
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