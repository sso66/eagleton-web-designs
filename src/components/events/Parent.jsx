// events/Parent.jsx
import React from 'react';

import Child from './Child' 

function Parent () {

    const handleOnAction = () => {
        alert("Child button is clicked!");
    }

    return (
        <div>
            <Child handleOnAction={handleOnAction} />
        </div>
    );
}


export default Parent;

// eof