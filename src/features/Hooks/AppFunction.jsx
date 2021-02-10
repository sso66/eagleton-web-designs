// features/Hooks/AppFunction.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AppFunction({name="React Function Component"}) {
    const [age, setAge] = useState(30);
    const status = useState('married');

    const handleClick = () => {
        console.log(name);
        setAge(age + 1);
    }

    return (
        <div>
            <h3>Hello {name}</h3>
            <p>Today I am <b>{age}</b> years old, 
                and <i>{status}</i>!
            </p>
            <button
                onClick={handleClick}
            >
                Click Me:&nbsp;{name}
            </button>
        </div>
    )
}

AppFunction.propTypes = {
    name: PropTypes.string,
}

export default AppFunction;

// eof