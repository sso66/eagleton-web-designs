// File: src/features/Form/ParentChildForm.jsx
// Date: 2/18/2021
// Note: React Controlled and Uncontrolled Forms
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Parent() {
    const [value, setValue] = useState("")

    function handleChange(newValue) {
        setValue(newValue);
    }

    // ___ pass a callback to Child ___
    return <Child value={value} onChange={handleChange} />
}

function Child(props) {
    function handleChange(event) {
        // ___ here, invoke the callback with the new value
        props.onChange(event.target.value);
    }
    return (
        <>
            <h3>Child Component</h3>
            <input value={props.value} onChange={handleChange} />
            <p>New Value:&nbsp;{props.value}</p>
        </>
    )
}

Parent.propTypes ={
    value: PropTypes.number.isRequired,
}

export default Parent;

// eof