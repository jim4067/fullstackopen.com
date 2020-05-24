import React, {useState} from 'react';
import ReactDOM from 'react-dom';


//a proper place to define a component that handles the buttons
const Button = (props) => {
  return (
    <span>
      <button onClick = {props.handleClick}> {props.name} </button>{' '}
    </span>    
  );
};



 //a proper place to define static component that handles a single stat
const Statistic = (props) => {
  return (
    <table>
      <tbody>    
        <tr>
          <td>{props.name}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
  </table>
  );
};


// a proper place to define the component the component that handles stats
const Statistics = (props) => {
  
  return (
    <div>
      <Statistic name = "good" value = {props.good} /> 
      <Statistic name = "neutral" value = {props.neutral} />
      <Statistic name = "bad" value = {props.bad} />
      <Statistic name = "all" value = {props.all} />
      <Statistic name = "average" value = {props.average} />
      <Statistic name = "positive" value = {props.positive} />
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

  //no feedback shown when user has not given feedback 
  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGood} name = "good" />
        <Button handleClick ={handleNeutral} name = "neutral" />
        <Button handleClick ={handleBad}  name = "bad" />

        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  };


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} name="good" />
      <Button handleClick={handleNeutral} name="neutral" />
      <Button handleClick={handleBad} name="bad" />

      <h1>statistics</h1>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} all = { all } average={average} positive={positive} />

    </div>
  );
};


ReactDOM.render(<App /> ,document.getElementById ('root') );
