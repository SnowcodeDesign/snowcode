import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import SnowcodeRootPage from './pages/snowcodeRootPage';
import SnowcodePressReleasePage from './pages/snowcodePressReleasePage';
import SnowcodePricingPage from './pages/snowcodePricingPage';
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

export default function App() {
  const classes = useStyles();
  const networker = new SnowcodeNetworker();

  const handleBuyNowFormSubmit = (payload) => {
    networker.buyNow(payload).then(r => {
      console.log("handleBuyNowFormSubmit Success = " + r);
    }).catch(e => {
      console.log("handleBuyNowFormSubmit Error = " + e);
    });
  }

  const rootPage = (
    <SnowcodeRootPage 
      theme={theme}
      onBuyNowFormSubmit={ handleBuyNowFormSubmit }
    />
  );

  const pricingPage = (
    <SnowcodePricingPage 
      theme={theme}
      onBuyNowFormSubmit={ handleBuyNowFormSubmit }
    />
  );

  const pressReleasePage = (
    <SnowcodePressReleasePage
      theme={theme}
    />
  );

  const page = () => {
    const currentPath = window.location.search;
    if (!currentPath || currentPath.length < 1) {
      return rootPage;
    } 
    
    const pricingPath = '?pricing';
    // if (currentPath.length >= pricingPath.length && currentPath.substring(0, pricingPath.length) === pricingPath) {
    if (currentPath === pricingPath) {
      return pricingPage;
    }
        
    const pressPath = '?press';
    // if (currentPath.length >= pressPath.length && currentPath.substring(0, pressPath.length) === pressPath) {
    if (currentPath === pressPath) { 
      return pressReleasePage;
    }
    
    return rootPage;
  }

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          { page() }

        </ThemeProvider>
      </div>
    </div>
  );
}