import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SnowcodePortfolioCard from './snowcodePortfolioCard';

import garden from '../img/Screen_Shot_2020-07-09_at_5.31.47_PM.png';
import leaf from '../img/Screen Shot 2020-08-16 at 2.30.31 AM.png';
import exefel from '../img/screenie_schedule (1).jpeg';
import jillaweiss from '../img/Screen Shot 2020-08-16 at 6.47.20 PM.png';
import coffee from '../img/Screen Shot 2020-08-16 at 6.56.19 PM.png';
import constantine from '../img/Screen Shot 2020-08-16 at 8.25.31 PM.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '400px',
    paddingTop: 26,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    background: theme.palette.primary.main
  },
  container: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    tableLayout: 'fixed',
  },
  title: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.4)',
    paddingBottom: 14,
    display: 'none',
  },
  header: {
    textAlign: 'center',
    fontSize: '1.6rem',
    fontWeight: 700,
    paddingTop: 10,
    paddingBottom: 10,
  },
  grid: {
    textAlign: 'center',

    [theme.breakpoints.down(550)]: {
      '& > a > .MuiCard-root': {
        width: '77%',
        wordBreak: 'break-all'
      }  
    },
  }
}));

export default function SnowcodePortfolioGrid({}) {
  const classes = useStyles();
  const theme = useTheme();

  const portfolioItems = [{
    image: leaf,
    caption: '',
    title: 'myleaf.fun',
    subtitle: "🐝 minimal animal crossing webapp",
    button: "http://myleaf.fun"
  }, {
    image: jillaweiss,
    caption: '',
    title: 'jillaweiss.com',
    subtitle: '📸 curated gallery of photography',
    button: 'https://jillaweiss.com/'
  }, {
    image: garden,
    caption: '$',
    title: 'gardenguide.fun',
    subtitle: "💐 flower breeding & growing guide",
    button: "http://gardenguide.fun"
  }, {
    image: constantine,
    caption: '',
    title: 'Constantine Raykovskyy',
    subtitle: "🛠 brooklyn-based contractor",
    button: 'https://constantineraykovskyy.com/',
  }, {
    image: exefel,
    caption: '',
    title: 'exefel',
    subtitle: "🏈 unofficial xfl stats app for iOS",
    button: "https://github.com/insanj/exefel"
  }, {
    image: coffee,
    caption: '',
    title: 'julian.coffee',
    subtitle: '☕ python bot that crawls venmo',
    button: 'https://github.com/SnowcodeDesign/julian.coffee'
  }];
  const portfolioCards = portfolioItems.map(item => {
    return (
      <a href={ item.button } target="_blank">
        <SnowcodePortfolioCard
          item={ item }
        />
      </a>
    )
  });

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          PORTFOLIO
        </div>

        <div className={classes.header}>
          See what we've built already &amp; <span style={{ color: theme.palette.secondary.main }}> get inspired</span>
        </div>

        <div className={classes.grid}>
          { portfolioCards }
        </div>
      </div>
    </div>
  );
}