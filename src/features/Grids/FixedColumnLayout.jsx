import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Paper, 
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'orange',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }
});

const FixedColumnLayout = withStyles(styles)(({ classes, width='6' }) => ( 
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs={12}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={width}>
        <Paper className={classes.paper}>xs={width}</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs={12}</Paper>
      </Grid>
    </Grid>
  </div>
));

export default FixedColumnLayout;

// eof