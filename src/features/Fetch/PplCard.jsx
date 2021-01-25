// PplCard.jsx
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    CardActions,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
}));

export default function PplCard({ avatar, first_name, last_name, email }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={avatar}
                />
                <CardContent>
                    <Typography
                        variant='h5'
                        component='h2'
                        gutterBottom
                    >
                        {first_name + ' ' + last_name }    
                    </Typography>
                    <Typography
                        variant='body2'
                        component='p'
                        color='textSecondary'
                    >
                        {email}

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size='small'
                    href={avatar}
                    color='primary'
                >
                    Thumbnail Pic
                </Button>
            </CardActions>
        </Card>
    )
}
// eof