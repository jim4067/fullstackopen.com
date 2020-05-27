import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({name}) => {

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

const Part = (props) => {
  
  return(
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};  

const Content = (props) => {

  console.log("is this logging part1 name" , props.course.parts[0].name);

  return(
    <div>
      <Part name = {props.course.parts[0].name}  exercises ={props.course.parts[0].exercises}/> 
      <Part name = {props.course.parts[1].name}  exercises ={props.course.parts[1].exercises}/> 
      <Part name = {props.course.parts[2].name}  exercises ={props.course.parts[2].exercises}/> 
    </div>
  );
};


const Total = (props) =>  {

  const sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises;

  return (
    <div>
      The sum of the exercises is {sum}
    </div>
  )
};

const Course = (props) => {

  return(
    <div>
      <Header name = {props.course.name}/>
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App /> , document.getElementById('root'));
























