import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Paper, 
  Hidden,
  Typography,
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    // background: 'orange',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }
});

const ColumnDirection = withStyles(styles)(({ classes, width="3" }) => ( 
  <div className={classes.root}>
    <Grid container spacing={4} justify="space-around">
      <Grid item xs={width}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>One</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Two</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>  
      <Grid item xs={width}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Three</Typography>
            </Paper>
          </Grid>
          <Grid item>
              <Paper className={classes.paper}>
                <Typography>Four</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={width}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Five</Typography>
            </Paper>
          </Grid>
          <Grid item>
              <Paper className={classes.paper}>
                <Typography>Six</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Hidden smDown>
        <Grid item xs={width}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Seven</Typography>
            </Paper>
          </Grid>
          <Grid item>
              <Paper className={classes.paper}>
                <Typography>Eight</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        </Hidden>
      </Grid>
  </div>
));

export default ColumnDirection;

// eof