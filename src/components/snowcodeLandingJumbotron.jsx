import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Snowfall from 'react-snowfall'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 140,
    paddingBottom: 140,
    marginTop: 0,

    background: `linear-gradient(220deg, rgba(100,147,255,0.7), rgba(255, 255, 255, 1) 70%)`,
    backgroundPosition: '0px 0px',
    backgroundSize: '200% 200%',

    animation: '$backgroundTransform 10s ease-in-out alternate infinite',
  },

  "@keyframes backgroundTransform" : {
    '25%': {
      backgroundSize: '200% 200%',
      backgroundPosition: '10% 0%'
    },
    '50%': {
      backgroundSize: '200% 200%',
      backgroundPosition: '30% 0%'
    },
    '75%': {
      backgroundSize: '200% 200%',
      backgroundPosition: '20% 20%'
    },
    '0%': {
      backgroundSize: '100% 100%',
      backgroundPosition: '0px 0px'
    }
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
  const titleSuffix = "online.";
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
      <Snowfall
        color="rgba(255,255,255,0.66)"
        snowflakeCount={200}
      />

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
