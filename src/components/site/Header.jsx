// Header.jsx
import React from 'react';

import {
    Container,
    Typography,
    AppBar,
    Toolbar
} from '@material-ui/core';

function Header() {
    return (
        <AppBar 
            position='static'
            color='primary'
        >
            <Container maxWidth='md'>
                <Toolbar>
                    <Typography>
                        Component Abstraction with Design Patterns
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

// eof