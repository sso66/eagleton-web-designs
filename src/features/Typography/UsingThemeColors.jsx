import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';

const UsingThemeColors =({ color="textSecondary" }) => (
    <Fragment>
        <Typography variant="h1" color={color}>h1 variant</Typography>
        <Typography variant="h2" color={color}>h2 variant</Typography>
        <Typography variant="h3" color={color}>h3 variant</Typography>
        <Typography variant="h4" color={color}>h4 variant</Typography>
        <Typography variant="h5" color={color}>h5 variant</Typography>
        <Typography variant="h6" color={color}>h6 variant</Typography>
        <Typography variant="subtitle1" color={color}>subtitle1 variant</Typography>
        <Typography variant="subtitle2" color={color}>subtitle2 variant</Typography>
        <Typography variant="body1" color={color}>body1 variant</Typography>
        <Typography variant="body2" color={color}>body2 variant</Typography>
        <Typography variant="caption" color={color}>caption variant</Typography>
        <Typography variant="button" component='div' color={color}>button variant</Typography>
        <Typography variant="overline" component='div' color={color}>overline variant</Typography>
        <Typography variant="title" color={color}>title variant</Typography>
    </Fragment>
);

export default UsingThemeColors;

// eof