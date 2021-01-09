import React from 'react';
import { Button } from '@material-ui/core';

const SwitchStatement = (props) => {
    const { isLoggedIn } = props;

    switch (isLoggedIn) {
        case true:
            return <Button name="logout" variant="outlined" >Logout</Button>
            break;
        case false:
            return <Button name="login" variant="outlined">Login</Button>     
            break;
        default: 
            return null;
    }
}

export default SwitchStatement;

// eof