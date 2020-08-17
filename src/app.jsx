import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import SnowcodeRootPage from './pages/snowcodeRootPage';
import SnowcodePressReleasePage from './pages/snowcodePressReleasePage';
import SnowcodeNetworker from './backend/snowcodeNetworker';

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
  const networker = new SnowcodeNetworker();

  const handleBuyNowFormSubmit = (payload) => {
    networker.buyNow(payload).then(r => {
      console.log("handleBuyNowFormSubmit Success = " + r);
    }).catch(e => {
      console.log("handleBuyNowFormSubmit Error = " + e);
    });
  }

  const currentPath = window.location.search;
  const isCurrentPathPressRelease = currentPath && currentPath.length > 0 && currentPath === '?press';
  const page = !isCurrentPathPressRelease ? (
    <SnowcodeRootPage 
      theme={theme}
      onBuyNowFormSubmit={ handleBuyNowFormSubmit }
    />
  ) : (
    <SnowcodePressReleasePage
      theme={theme}
      onBuyNowFormSubmit={ handleBuyNowFormSubmit }
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          { page }

        </ThemeProvider>
      </div>
    </div>
  );
}