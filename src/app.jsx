import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import SnowcodeRootPage from './pages/snowcodeRootPage';

import './css/fonts.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#6493ff'
    },
    secondary: {
      main: '#6493ff',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Lato'
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
  },
  app: {

  },
}));

export default function App({ }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          <SnowcodeRootPage 
            theme={theme}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}