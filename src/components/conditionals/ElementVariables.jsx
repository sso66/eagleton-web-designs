import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

function Example() {
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const handleOnAction = () => {
        setIsLoggedin(!isLoggedIn);
    }

    let AuthButton;
    
    if (isLoggedIn) {
        AuthButton = <Button name="logout" variant="outlined" onClick={handleOnAction} >Logout</Button>
    } else { 
        AuthButton = <Button name="login" variant="outlined" onClick={handleOnAction}>Login</Button>
    }
    return (
        <div>
            {AuthButton}
        </div>
    );     
}

export default Example;

// eof