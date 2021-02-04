import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Menu,
    MenuItem,
    Button,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavMenuItem = ({ color, ...props }) => (
    <Router>
    <Switch>
        <Route
            exact
            path={props.to}
            render={() => <MenuItem selected component={Link} {...props} />}
        />
        <Route
            path="/"
            render={() => <MenuItem component={Link} {...props} />}
        />
    </Switch>
    </Router>
);

const useStyles = makeStyles(theme => ({
    rightIcon: {
        marginLeft: theme.spacing(1)
    }
}));


export default function CustomizingMenuItems() {

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
            >
                <NavMenuItem to="/" onClick={onClose}>
                    Home
                </NavMenuItem>
                <NavMenuItem to="/page1" onClick={onClose}>
                    Page 1
                </NavMenuItem>
                <NavMenuItem to="/page2" onClick={onClose}>
                    Page 2
                </NavMenuItem>
            </Menu>
            <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Typography>home content</Typography>}
                />
                <Route
                    path="/page1"
                    render={() => <Typography>page 1 content</Typography>}
                />
                <Route
                    path="/page2"
                    render={() => <Typography>page 2 content</Typography>}
                />
            </Switch>
            </Router>
        </Fragment>
    );
}

// eof