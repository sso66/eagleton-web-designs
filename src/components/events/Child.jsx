// events/Childjsx
import React from 'react';
import { Button } from '@material-ui/core';

function Child(props) {
    return (
        <div>
            <Button color="primary" size="small" variant="contained" onClick={props.handleOnAction}>Parent/Child</Button>
        </div>
    );
}

export default Child;

// eof