import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import snowcodeHeader from '../img/header-2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
    paddingBottom: 100,

    background: theme.palette.primary.main,

    backgroundImage: `url(${snowcodeHeader})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.primary.main,

    backgroundSize: 'contain',
    backgroundPosition: 'center',
    // [theme.breakpoints.up(1130)]: {
    //   backgroundSize: 'contain',
    //   backgroundPosition: 'right',
    // },
    [theme.breakpoints.down(883)]: {
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up(883)]: {
      backgroundPosition: 'right',
    },
  },
  rootContainer: {
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: 1, 
    textShadow: '0px 0px 2px rgba(0,0,0,0.1)'
  },
  body: {
    fontSize: '1.0rem',
    opacity: 0.6,
    marginTop: 8,
    textShadow: '0px 0px 2px rgba(0,0,0,0.2)'
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
    {'Cutting-edge websites and apps for businesses.'}
    <br/>
    {'We design scalable, Fortune 500-grade products for you and ship within three months.'}
    </div>
  );

  const primaryButton = "Buy Now";
  const secondaryButton = "See Pricing";

  return (
    <div className={classes.root}>
      <div className={classes.rootContainer}>
        <div className={classes.title}>
          { title }<span style={{ color: theme.palette.secondary.main }}>{ titleSuffix }</span>
        </div>

        <div className={classes.body}>
          { body }
        </div>

        <div className={classes.buttons}>
          <Button color="secondary" variant="contained" onClick={onBuyNowClick}>
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
