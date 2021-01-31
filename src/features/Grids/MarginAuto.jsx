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

const MarginAuto = withStyles(styles)(({ classes }) => ( 
  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
    </Grid>
  </div>
));

export default MarginAuto;

// eof