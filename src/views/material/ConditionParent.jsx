import React, { useState } from 'react';

const Condition1 = () => {
    return (
        <div>
            <p>If TRUE, display this!</p>
        </div>
    )
}
const Condition2 = () => {
    return (
        <div>
            <p>If FALSE, display this!</p>
        </div>
    )
}
const Condition3 = () => {
    return (
        <div>
            <p>If DEFAULT, display this!</p>
        </div>
    )
}

const  ConditionParent = () => {
    let codeToDisplay = null;
    const [condition, setCondition] = useState(false);

    const handleConditionChange = () => {
        setCondition(!condition);
    }

    if (condition) {
        codeToDisplay = <Condition1 />
    } else if (Condition1) {
        codeToDisplay = <Condition2 />
    } else {
        codeToDisplay = <Condition3 />
    }

    return (
        <div>
        <button
            type='button'
            onClick={handleConditionChange}>
                Click
            </button>
            {codeToDisplay}
        </div>
    )
};

export default ConditionParent;

// eof