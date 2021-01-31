import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Paper, 
  Chip,
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

const Alignment = withStyles(styles)(({ classes, justify="space-between" }) => ( 
  <div className={classes.root}>
    <Grid container spacing={4}>

      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify={justify}>
            <Grid item>            
              <Chip label="xs=12" />
            </Grid>
            <Grid item>            
              <Chip label="sm=6" />
            </Grid>
            <Grid item>            
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify={justify}>
          <Grid item>            
              <Chip label="xs=12" />
            </Grid>
            <Grid item>            
              <Chip label="sm=6" />
            </Grid>
            <Grid item>            
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify={justify}>
          <Grid item>            
              <Chip label="xs=12" />
            </Grid>
            <Grid item>            
              <Chip label="sm=6" />
            </Grid>
            <Grid item>            
              <Chip label="md=3" />
            </Grid>
         </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify={justify}>
          <Grid item>            
              <Chip label="xs=12" />
            </Grid>
            <Grid item>            
              <Chip label="sm=6" />
            </Grid>
            <Grid item>            
              <Chip label="md=3" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
));

export default Alignment;

// eof