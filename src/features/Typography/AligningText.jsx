import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { 
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';

const styles = theme => ({
    paper: {
        width: 200,
        height: 200,
        background:'white',
        padding: theme.spacing(1),
    }
});

let message = "Text";

const MyPaper = withStyles(styles)(
    ({ horizontalAlign, verticalAlign, classes, ...props}) => (
        <Grid
            container
            companent={Paper}
            className={classes.paper}
            alignContent={verticalAlign}
            justify={horizontalAlign}
            {...props}
        />
    )
);

const MyTypography = ({ ...props }) => (
    <Grid item component={Typography} {...props} />
);

const AligningText = ({ ...props }) => (
    <MyPaper {...props}>
        <MyTypography {...props}>
            {message}
        </MyTypography>
    </MyPaper>
);

export default AligningText;

// eof