// FixedPosition.jdx
import React from 'react';

import {    
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import {
    withStyles,
} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: 'orange'
    },
    flexItem: {
        flex: 1
    },
    menuButton: {   // hamburger menu
        marginLeft: -12,
        marginRight: 20,
    }
})
const FixedPosition = withStyles(styles)(({ classes}) => (
    <div classes={classes.root}>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color='inherit'
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant='h5'
                    color='inherit'
                    className={classes.flexItem}
                >
                    Title
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
        <ul>
            {new Array(30).fill(null).map((v, i) => (
                <li key={i}>{i+1}</li>
            ))}
        </ul>
    </div>
));

export default FixedPosition;

// eof