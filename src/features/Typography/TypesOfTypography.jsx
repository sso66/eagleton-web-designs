import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

const MyTypography = ({ variant, ...props}) => (
    <Typography variant={variant || 'inherit'} {...props} />
);

const TypesOfTypography = () => (
    <Fragment>
        {/* <Typography variant="h1">h1 variant</Typography>
        <Typography variant="h2">h2 variant</Typography>
        <Typography variant="h3">h3 variant</Typography>
        <Typography variant="h4">h4 variant</Typography>
        <Typography variant="h5">h5 variant</Typography>
        <Typography variant="h6">h6 variant</Typography>
        <Typography variant="subtitle1">subtitle1 variant</Typography>
        <Typography variant="subtitle2">subtitle2 variant</Typography>
        <Typography variant="body1">body1 variant</Typography>
        <Typography variant="body2">body2 variant</Typography>
        <Typography variant="caption">caption variant</Typography>
        <Typography variant="button" component='div'>button variant</Typography>
        <Typography variant="overline" component='div'>overline variant</Typography>
        <Typography variant="title">title variant</Typography> */}
        <Typography variant="title" component='div'>
            <Typography variant="inherit">
                inherited title variant
            </Typography>
            <Typography variant="inherit" component='div'>
                another inherited title variant
            </Typography>
            <Typography variant="caption">
                override caption variant
            </Typography>           
        </Typography>
        <MyTypography variant="title" component='div'>
            <MyTypography component='div'>
                inherited title variant
            </MyTypography>
            <MyTypography component='div'>
                another inherited title variant
            </MyTypography>
            <MyTypography variant="caption">
                override caption variant
            </MyTypography>           
        </MyTypography>       
    </Fragment>
);

export default TypesOfTypography;

// eof