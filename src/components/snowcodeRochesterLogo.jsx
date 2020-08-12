import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import rochesterLogo from '../img/Logo_of_Rochester,_New_York.svg';
import philadelphiaLogo from '../img/white-00ca472cc3ffe59c94e540450c11b2c3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,

  },
  image: {
    width: '120px',
    height: '120px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'rotate(20deg)',
    opacity: 0.2
  },
  footer: {
    fontSize: '0.8rem',
    marginTop: 6,
    opacity: 0.2
  },
  footerImage: {
    width: '10px',
    height: '10px'
  }
}));

export default function SnowcodeRochesterLogo({ theme, useDark=false }) {
  const classes = useStyles();

  const rootStyle = useDark !== true ? {} : {
    background: '#001d5a',
    color: theme.palette.secondary.contrastText
  };

  return (
    <div className={classes.root} style={ rootStyle }>
      <center>
        <img className={ classes.image } src={ rochesterLogo } />

        <div className={classes.footer}>
          Made with <img className={classes.footerImage} src={ philadelphiaLogo } /> in Rochester, NY
          <br/>
          &copy; 2020 Julian (insanj) Weiss
        </div>
      </center>
    </div>
  );
}