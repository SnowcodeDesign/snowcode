import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    background: theme.palette.primary.main,
  },
  rootContainer: {
    minWidth: '444px',
    width: '100%',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
  },
  body: {
    fontSize: '1.0rem',
    opacity: 0.6,
    marginTop: 8
  },
  buttons: {
    marginTop: 16,

    '& > *': {
      marginRight: 10
    }

  }
}));

export default function SnowcodeLandingJumbotron({ theme }) {
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
  const secondaryButton = "Contact Us";

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
        <Button color="secondary" variant="contained">
          { primaryButton }
        </Button>

        <Button variant="outlined">
          { secondaryButton }
        </Button>

      </div>
      </div>
    </div>
  );
}
