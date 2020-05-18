import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total total = {exercises1 + exercises2 + exercises3} />
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
  return (
    <div>
      
        <Part part = "Fundamentals of react " exercises = {10} />
        <Part part = "Using props to pass data " exercises = {7} />
        <Part part = "State of a component " exercises = {14} />
      
    </div>
  );
};


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

ReactDOM.render( <App/>, document.getElementById('root') );

