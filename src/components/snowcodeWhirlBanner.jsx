import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
        
        marginTop: 62,
        [theme.breakpoints.down(600)]: {
            marginTop: 48,
        },
        [theme.breakpoints.down(519)]: {
            marginTop: 49,
        },

        width: '100%',
        minHeight: '50px',
        backgroundColor: theme.palette.secondary.main,

        color: '#fff',
        fontSize: '18px',
        fontWeight: 300,
        padding: '12px',

        textAlign: 'center',
  },

  link: {
      display: 'inline',
      cursor: 'pointer',

      '&:hover': {
          opacity: 0.7
      }

  }
}));

export default function SnowcodeWhirlBanner({ theme, onLearnMoreClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        🎄 New for December: <b>Snowcode Flurries</b> starting at <b>$25/mo</b>. <div className={classes.link} onClick={onLearnMoreClick}>Learn more.</div>
    </div>
  );
}