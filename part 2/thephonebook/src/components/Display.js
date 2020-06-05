import React from 'react';

const Display = (props) => {
    const label = props.persons.name === "" ? alert("deleted") : "Delete";

    return (
        <div>
            {props.persons.map((personParam, i) =>
                <p key={i}>
                    {personParam.name} {personParam.number}
                    <button onClick={props.handleDel}> {label} </button>
                </p>
            )}
        </div>
    );
}

export default Display;