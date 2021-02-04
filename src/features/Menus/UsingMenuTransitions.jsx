// features/Menus/UsingMenuTransitions.jsx
import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Menu,
    MenuItem,
    Button,

    Collapse,
    Fade,
    Grow,
    Slide,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    rightIcon: {
        marginLeft: theme.spacing(1)
    }
}));

export default function UsingMenuTransitions({
    transition,
    duration
}) {
    const onOpen = e => {
        setAnchorEl(e.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    
    return (
        <Fragment>
            <Button onClick={onOpen}>
                Menu
                <MenuIcon className={classes.rightIcon} />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose}
                transitionDuration={duration}
                TransitionComponent={
                    {
                        collapse: Collapse,
                        fade: Fade,
                        grow: Grow,
                        slide: Slide,
                    }[transition]

                }
            >
                <MenuItem onClick={onClose}>Profile</MenuItem>
                <MenuItem onClick={onClose}>My Account</MenuItem>
                <MenuItem onClick={onClose}>Logout</MenuItem>
            </Menu>
        </Fragment>
    );
}

// eof