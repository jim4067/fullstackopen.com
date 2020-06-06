//import axios from 'axios';
import React from 'react';

const Display = (persons) => {

    return (
        <div>
            {persons.name} {persons.number}
        </div>
    );
}

export default Display;