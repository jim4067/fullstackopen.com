import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  //destructuring the array to avoid the 

  return (
    <div>
      <Header course = {course} />
      <Content  name = {parts[0].name} exercises = {parts[0].exercises }/>
      <Content  name = {parts[1].name} exercises = {parts[1].exercises }/>
      <Content  name = {parts[2].name} exercises = {parts[2].exercises }/>
      <Total total = { parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div> 
      <h1>
        {props.course}
      </h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props)
  return (
    <div> 
      <p>
      {props.name} {props.exercises}
      </p>
    </div>
  );
}; 
 
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        The number of exercises are {props.totals}
      </p>
    </div>
  );
};

ReactDOM.render( <App/>, document.getElementById('root') );

