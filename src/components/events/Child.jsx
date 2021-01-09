// events/Childjsx
import React from 'react';
import { Button } from '@material-ui/core';

function Child(props) {
    return (
        <div>
            <Button variant="contained" onClick={props.handleOnAction}>Child </Button>
        </div>
    );
}

export default Child;

// eof