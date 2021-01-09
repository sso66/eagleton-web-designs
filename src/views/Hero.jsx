// Hero.jsx
import React from 'react';

import {
    Container,
    Typography,
} from '@material-ui/core';

import { useStyles } from './useStyles';

function Hero() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <div className={classes.root}>
                <Typography variant="h2" gutterBottom>
                    React-Hooks Material-UI Axios-API
                </Typography>

                <Typography variant="p" gutterBottom>
                    Hero Component
                </Typography>
            </div>
        </Container>
    )
}

export default Hero;
// eof