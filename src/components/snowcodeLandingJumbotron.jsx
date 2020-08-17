import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import snowcodeHeader from '../img/header-icons.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 140,
    paddingBottom: 140,

    background: `linear-gradient(220deg, rgba(100,147,255,0.7), rgba(255, 255, 255, 1) 70%)`,

    marginTop: 50,
    [theme.breakpoints.down(600)]: {
      marginTop: 52,
    },
    [theme.breakpoints.up(883)]: {
    },

    // backgroundImage: `url(${snowcodeHeader})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundColor: theme.palette.primary.main,

    // backgroundSize: 'contain',
    // backgroundPosition: 'center',
    // // [theme.breakpoints.up(1130)]: {
    // //   backgroundSize: 'contain',
    // //   backgroundPosition: 'right',
    // // },
    // [theme.breakpoints.down(883)]: {
    //   backgroundSize: 'cover',
    // },
    // [theme.breakpoints.up(883)]: {
    //   backgroundPosition: 'right',
    // },

    // animation: '$backgroundTransform 5s ease-in-out',
  },

  // "@keyframes backgroundTransform" : {
  //   '0%': {
  //     backgroundPosition: '0px 0px'
  //   },
  //   '44%': {
  //     backgroundPosition: '50px 0px'
  //   },
  //   '77%': {
  //     backgroundPosition: 'center'
  //   },
  // },
  rootBackground: {
    position: 'absolute',
    left: 0,
    width: '100%',
    top: 60,
    height: '420px',
    pointerEvents: 'none',

    opacity: 0.7,
    backgroundImage: `url(${snowcodeHeader})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'right',

    [theme.breakpoints.down(650)]: {
      backgroundSize: 'cover',
    },


    [theme.breakpoints.down(515)]: {
      height: '470px',
      backgroundSize: 'cover'
    },

  },
  rootContainer: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '2.1rem',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: 1, 
    textShadow: '0px 0px 2px rgba(0,0,0,0.1)'
  },
  body: {
    fontSize: '1.0rem',
    opacity: 1,
    marginTop: 8,
    color: 'rgba(0,0,0,0.5)',
    textShadow: '0px 0px 2px rgba(0,0,0,0.12)'
  },
  buttons: {
    marginTop: 16,

    '& > *': {
      marginRight: 10
    }

  }
}));

export default function SnowcodeLandingJumbotron({ theme, onBuyNowClick, onPricingClick }) {
  const classes = useStyles();

  const title = "Bring your work to life ";
  const titleSuffix = "online";
  const body = (
    <div>
    {'Cutting-edge websites and apps for everyone.'}
    <br/>
    {'We design scalable, Fortune 500-grade products for you and ship within three months.'}
    </div>
  );

  const primaryButton = "Buy Now";
  const secondaryButton = "See Pricing";

  return (
    <div className={classes.root}>
      <div className={classes.rootBackground} />
      <div className={classes.rootContainer}>
        <div className={classes.title}>
          { title }<span style={{ color: theme.palette.secondary.main }}>{ titleSuffix }</span>
        </div>

        <div className={classes.body}>
          { body }
        </div>

        <div className={classes.buttons}>
          <Button color="secondary" variant="contained" onClick={ onBuyNowClick } >
            { primaryButton }
          </Button>

          <Button variant="outlined" onClick={onPricingClick}>
            { secondaryButton }
          </Button>

        </div>
      </div>
    </div>
  );
}
