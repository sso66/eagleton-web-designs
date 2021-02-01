// features/Menus/ComposingMenusWithState.jsx
import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Menu,
    MenuItem,
    Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    rightIcon: {
        marginLeft: theme.spacing(1)
    }
}));

export default function ComposingMenusWithState() {
    const onOpen = e => {
        setAnchorEl(e.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [items, setItems] = useState([
        { name: 'First', onClick: onClose },
        { name: 'Second', onClick: onClose },
        { name: 'Third', onClick: onClose },
        { name: 'Fourth', onClick: onClose, disabled: true }
    ]);
    
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
            >
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={item.onClick}
                        disabled={item.disabled}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
}

// eof