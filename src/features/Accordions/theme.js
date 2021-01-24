// theme.js
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// ___ custom theme for this component
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;

// eof
