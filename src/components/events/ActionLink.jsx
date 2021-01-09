// ActionLink.jsx
import { render } from '@testing-library/react';
import React from 'react';

function ActionLink() {
    // Command DP
    const handleOnAction = (e) => {
        e.preventDefault();

        doSomething();
    }
    // Strategy DP
    function doSomething() {
        alert("doSomething():The link is clicked")
    }


    return (
        <a href='#' onClick={handleOnAction}>
            Click me
        </a>
    )   
}

export default ActionLink;

// eof