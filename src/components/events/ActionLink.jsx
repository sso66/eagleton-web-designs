// ActionLink.jsx
import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 120,
      background: 'lightblue'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function ActionLink() {
    const classes = useStyles();
    // Command DP
    const handleOnAction = (e) => {
        e.preventDefault();

        doSomething();
    }
    // Strategy DP
    function doSomething() {
        alert("doSomething(): The link is clicked")
    }

    // Observer
    return (<Card className={classes.root} variant="outlined"><a href='#' onClick={handleOnAction}>Click Observer</a></Card>)   
}

export default ActionLink;

// eof