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

const AbstractContainer = props => <Grid container {...props} />;
const AbstractItem = props => <Grid item xs={12} sm={6} md={3} {...props} />;

const AbstractContainerAndItems = withStyles(styles)(({ classes }) => ( 
  <div className={classes.root}>
    <AbstractContainer spacing={4}>
      <AbstractItem>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </AbstractItem>
      <AbstractItem>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </AbstractItem>
      <AbstractItem>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </AbstractItem>
      <AbstractItem>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </AbstractItem>
    </AbstractContainer>
  </div>
));

export default AbstractContainerAndItems;

// eof