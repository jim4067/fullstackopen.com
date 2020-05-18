import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
console.log(course.parts[0].exercises);
  return (
    <div>
      <Header course = {course.name} />
      <Content name = {course.parts[0].name} exercises = {course.parts[0].exercises} />
      <Content name = {course.parts[1].name} exercises = {course.parts[1].exercises} />
      <Content name = {course.parts[2].name} exercises = {course.parts[2].exercises} />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
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
  console.log(props);
  return (
    <div>
      <p>
        The total number of exercises are {props.total}
      </p>
    </div>
  );
};

ReactDOM.render(<App /> ,document.getElementById ('root') );