import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

function TernaryOperator() {
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const handleOnAction = () => {
        setIsLoggedin(!isLoggedIn);
    }

    return (
        <div>
            {
                isLoggedIn 
                ? 
                (<Button variant="outlined" onClick={handleOnAction}>Logout</Button>)
                :
                (<Button variant="outlined" onClick={handleOnAction}>Login</Button>)
            }
        </div>
    )
}

export default TernaryOperator;

// eof