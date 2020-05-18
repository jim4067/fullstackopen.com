import React from 'react';
import ReactDOM from 'react-dom';

//variable declaration here so that they are accessible byt all the components
const course = 'Half Stack application development'
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
};

const App = () => {

  return (
    <div>
      <Header course = {course} /> 
      <Content />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  );
};

const Content = () => {
 
  return (
    <div>
      <Parts part = {part1.name} exercises = {part1.exercises}/>
      <Parts part = {part2.name} exercises = {part2.exercises}/>
      <Parts part = {part3.name} exercises = {part3.exercises}/>
    </div>
  );
};

const Parts = (props) => {
  return (
    <div> 
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
        Number of exercises {props.total}
    </div>
  );
};
 
ReactDOM.render( <App/>, document.getElementById('root') );

