import React from 'react'


const Personform = (props) => {

    return (
        <div>

            <form onSubmit={props.addPerson} >
                <h3>add a new</h3>
                <div>
                    name: <input value={props.newName} onChange={props.handlePersonadd} />
                </div>
                <div>
                    number: <input value={props.newNum} onChange={props.handleNumadd} />
                </div>
                <div>
                    <button onClick={props.handleRepeat} type="submit">add</button>
                </div>
            </form>

            <h3>Numbers</h3>

            {props.displayFunc}

        </div>
    );
}


export default Personform