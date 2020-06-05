import React from 'react';

const Display = (props) => {
    
    return (
        <div>
                {props.persons.map((personParam, i) =>
                    <p key={i}>  {personParam.name} {personParam.number} </p>
                )}
        </div>
    );
}

export default Display;