import React from 'react';


const Header = (props) => {

    return (
        <div>
            <h2> {props.name} </h2>
        </div>
    );
};

const Part = (props) => {

    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    );
};

const Content1 = (props) => {

    return (
        <div>
            <Part name={props.course[0].parts[0].name} exercises={props.course[0].parts[0].exercises} />
            <Part name={props.course[0].parts[1].name} exercises={props.course[0].parts[1].exercises} />
            <Part name={props.course[0].parts[2].name} exercises={props.course[0].parts[2].exercises} />
            <Part name={props.course[0].parts[3].name} exercises={props.course[0].parts[3].exercises} />
        </div>
    );
};

const Content2 = (props) => {

    return (
        <div>
            <Part name={props.course[1].parts[0].name} exercises={props.course[1].parts[0].exercises} />
            <Part name={props.course[1].parts[1].name} exercises={props.course[1].parts[1].exercises} />
        </div>
    );
};



const Total1 = (props) => {

    console.log("the first exercise example", props.course[0].parts[1].exercises);


    const total = props.course[0].parts.reduce((acc, val) => {
        console.log("i want to see this magic happening here", "acc is ...", acc, "val is", val.exercises);
        return acc + val.exercises;
    }, 0);


    return (
        <div>
            <h3>
                total of {total} exercies
        </h3>
        </div>
    )
};


const Total2 = (props) => {

    console.log("the first exercise example", props.course[1].parts[1].exercises);


    const total = props.course[1].parts.reduce((acc, val) => {
        console.log("i want to see this magic happening here", "acc is ...", acc, "val is", val.exercises);
        return acc + val.exercises;
    }, 0);


    return (
        <div>
            <h3>
                total of {total} exercies
        </h3>
        </div>
    )
};


const Course = (props) => {
    console.log(" The name is ", props.course[0].name);

    return (
        <div>
            <Header name={props.course[0].name} />
            <Content1 course={props.course} />
            <Total1 course={props.course} />
            <Header name={props.course[1].name} />
            <Content2 course={props.course} />
            <Total2 course={props.course} />
        </div>
    );
};

export default Course;