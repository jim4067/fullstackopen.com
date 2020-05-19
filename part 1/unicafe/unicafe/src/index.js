import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// a proper place to define a component
const Statistics = (props) => {

  return (
    <div>
      {props.name} {props.stats}
    </div>
  );
};

const App = (props) => {
  const [clicks , setClicks] = useState({
    good : 0,
    good_point: 0,
    neutral : 0,
    neutral_point : 0,
    bad : 0,
    bad_point : 0
  });

  const handleGood = () => {
    const newClick = {
      ...clicks,
      good : clicks.good + 1,
      good_point : clicks.good_point + 1
    }
    setClicks(newClick);
  };

  const handleNeutral = () => {
    const newClick = {
      ...clicks,
      neutral : clicks.neutral + 1,
      neutral_point : clicks.neutral_point + 0
    }
    setClicks(newClick);
  };

  const handleBad = () => {
    const newClick = {
      ...clicks,
      bad : clicks.bad + 1,
      bad_point : clicks.bad_point - 1
    }
    setClicks(newClick);
  };

  const all = clicks.good + clicks.neutral + clicks.bad;

  const average = (clicks.bad_point + clicks.good_point ) / all;

  const positive = (clicks.good / all) * 100;
  
console.log("bad_point" , clicks.bad_point);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {handleGood}>good</button>
      <button onClick = {handleNeutral} >neutral</button>
      <button onClick = {handleBad} >bad</button>
      <h1>statistics</h1>
      <Statistics name = "good" stats = { clicks.good}/>
      <Statistics name = "neutral" stats = {clicks.neutral} />
      <Statistics name = "bad" stats = {clicks.bad} />
      <Statistics name = "all" stats = {all} />
      <Statistics name = "average" stats = {average} />
      <Statistics name = "positive" stats = {positive} />
    </div>  
  );
};


ReactDOM.render(<App /> ,document.getElementById ('root') );