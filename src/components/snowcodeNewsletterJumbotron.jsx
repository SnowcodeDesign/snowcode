import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MailIcon from '@material-ui/icons/Mail';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import cloud from '../img/cloud.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: theme.palette.secondary.main,
  },
  container: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  left: {
    verticalAlign: 'center',
    display: 'inline-block',
    width: '40%',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 0,
    paddingBottom: 60,

    [theme.breakpoints.down(800)]: {
      width: '100%',
      paddingTop: 80,
      display: 'flex',
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  leftImage: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',


    [theme.breakpoints.down(800)]: {
      width: '100%',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      

    },
  },
  right: {
    verticalAlign: 'top',
    display: 'inline-block',
    width: '50%',
    paddingLeft: 40,
    paddingRight: 10,
    paddingBottom: 100,
    paddingTop: 60,
    color: theme.palette.secondary.contrastText,

    [theme.breakpoints.down(800)]: {
      width: '100%',
      paddingTop: 0,
      paddingRight: 42,
    },
  },

  rightHeader: {
    fontSize: '1.7rem',
    fontWeight: 700,
    lineHeight: 1,
  },

  rightBody: {
    paddingTop: 16,
    fontSize: '1.1rem',
  },

  rightInputField: {
    paddingTop: 18,

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.contrastText,
      },
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      // '&.Mui-focused fieldset': {
      //   borderColor: 'green',
      // },
    }
  },

  adornment: {
    color: theme.palette.secondary.contrastText
  },
  rightiFrame: {
    border: 'none',
    width: '100%',
    height: '100%',
  },
}));

const DefaultNewsletterJumbotronModel = {
  left: {
    image: cloud,
  },
  right: {
    header: 'Subscribe To Our Newsletter',
    body: "Don't lose a chance to be among the first to know about our upcoming news and updates."
  }
};

export default function SnowcodeNewsletterJumbotron({ model = DefaultNewsletterJumbotronModel }) {
  const classes = useStyles();

  const textField = (
    <TextField 
  id="outlined-basic" 
  label="Enter your email" 
  variant="outlined"  
  fullWidth
  color="primary"
  InputProps={{
    endAdornment: (
      <InputAdornment className={classes.adornment} position="start"><MailIcon /></InputAdornment>
    ),
  }} />
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>

        <div className={classes.left}>
          <img className={classes.leftImage} src={ model.left.image } />
        </div>

        <div className={classes.right}>

          <div className={classes.rightHeader}>
            { model.right.header }
          </div>

          <div className={classes.rightBody}>
            { model.right.body }
          </div>

          <div className={classes.rightInputField}>
            <a style={{color: 'inherit', textDecoration: 'none'}} href="https://mailchi.mp/388e33ad3858/snowcodedesign" target="_blank">
              <Button startIcon={ <MailIcon /> } variant="contained" color="primary" fullWidth>
                Enter Email Address
              </Button>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}