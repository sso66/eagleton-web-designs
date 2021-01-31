import React, { Fragment } from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Typography,
} from '@material-ui/core';

const styles = theme => ({
    paper: {
        minWidth: 300,
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'left',
    },
    fixedHeight: { height: 200 },
    responsive: {
        [theme.breakpoints.down('xs')]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }
    }
});

const WrappingText = withStyles(styles)(({ classes }) => (
    <Fragment>
        <Paper className={classes.paper}>
            <Typography noWrap>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Volutpat maecenas volutpat blandit aliquam etiam.
            </Typography>
        </Paper>
        <Paper className={clsx(classes.paper, classes.fixedHeight)}>
            <Typography className={classes.responsive}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Volutpat maecenas volutpat blandit aliquam etiam. 
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae. 
                Ultricies leo integer malesuada nunc vel risus commodo.
                Sit amet luctus venenatis lectus magna fringilla urna 
                porttitor rhoncus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Volutpat maecenas volutpat blandit aliquam etiam. 
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae. 
                Ultricies leo integer malesuada nunc vel risus commodo.
                Sit amet luctus venenatis lectus magna fringilla urna 
                porttitor rhoncus.
            </Typography>
        </Paper>
    </Fragment>
));

export default WrappingText;

// eof