// theme.js: React JSS
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
    palette,

} from '@material-ui/system';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556dc6',
        },
        second: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff'
        },
    },
});

export default theme;

// eof