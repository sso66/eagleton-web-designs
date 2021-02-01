// features/Menus/ComposingMenusWithState.jsx
import React, { Fragment, useState, useEffect } from 'react';

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

const MyMenu = ({ items, onClose, anchorEl }) => (
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
);

export default function ComposingMenusWithStateAbstract() {
    const onOpen = e => {
        setAnchorEl(e.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [items, setItems] = useState([
        // { name: 'First', onClick: onClose },
        { name: 'Enable Fourth' },
        { name: 'Second', onClick: onClose },
        { name: 'Third', onClick: onClose },
        { name: 'Fourth', onClick: onClose, disabled: true }
    ]);
    
    useEffect(() => {
        const toggleFourth = () => {
            let newItems = [...items];

            newItems[3] = { ...items[3], disabled: !items[3].disabled };
            newItems[0] = {
                ...items[0],
                name: newItems[3].disabled
                    ? 'Enable Fourth'
                    : 'Disable Fourth'
            };

            setItems(newItems);
        }
        const newItems = [...items];
        newItems[0] = { ...items[0], onClick: toggleFourth };
        setItems(newItems);
    }, [items[3]]);
    
    return (
        <Fragment>
            <Button onClick={onOpen}>
                Menu
                <MenuIcon className={classes.rightIcon} />
            </Button>
            <MyMenu
                items={items}
                onClose={onClose}
                anchorEl={anchorEl}
            />
        </Fragment>
    );
}

// eof