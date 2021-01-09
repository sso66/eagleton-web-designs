// useStyles.js
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './theme.js';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid darkblue',
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));