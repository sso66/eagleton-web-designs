// Blog.jsx
import React from 'react';

import { 
    Typography,
    GridList,
    GridListTile,
    GridListTileBar,
    Card,
    CardHeader,
    CardActions,
    Button,

} from '@material-ui/core';

import { useStyles } from './useStyles';
import { tileData } from './tileData';

function Blog() {
    const classes = useStyles();

    return (
        <div classes={classes.root}>
            <Typography variant='h3' gutterBottom>
                Blog
            </Typography>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                        
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <GridListTileBar title={tile.title} />  
                            <Card>
                                <CardHeader title={tile.title} />
                                <CardActions>
                                    <Button size='small' color='primary' variant='outlined'>
                                        Read more
                                    </Button>
                                </CardActions>
                            </Card>  
                               
                        </GridListTile>
                    ))}
                </GridList>
            </div>    
        </div>
    )
}

export default Blog;

// eof