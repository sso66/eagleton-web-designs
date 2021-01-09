import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

function LogicalAndOperator() {
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const handleOnAction = () => {
        setIsLoggedin(!isLoggedIn);
    }

    return (
        <div>
            {isLoggedIn && <Button variant="contained" onClick={handleOnAction}>Logout</Button>}
        </div>
    )
}

export default LogicalAndOperator;

// eof