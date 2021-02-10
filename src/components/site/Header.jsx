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
                    <Typography variant='h6' color='default'>
                        React-Redux, Material-UI, Axios API
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

// eof