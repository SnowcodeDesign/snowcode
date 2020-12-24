import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';

import photos from '../img/cloud.png';
import letters from '../img/cloud-letters.png';

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
    width: '100%',
    height: '200px',

    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    '-webkit-transition': 'all .3s ease-in-out',
    '-moz-transition': 'all .3s ease-in-out',
    'transition': 'all .3s ease-in-out',

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
    image: '',
  },
  right: {
    header: 'Subscribe To Our Newsletter',
    body: "Don't lose a chance to be among the first to know about our upcoming news and updates."
  }
};

export default function SnowcodeNewsletterJumbotron({ model = DefaultNewsletterJumbotronModel }) {
  const classes = useStyles();

  const [newsletterImage, setNewsletterImage] = React.useState(photos);

  useEffect(() => {
    
    setInterval(() => {
      const currentSecond = (new Date()).getSeconds();
      if (currentSecond % 2 === 0) {
        setNewsletterImage(letters);
      } else {
        setNewsletterImage(photos);
      }
    }, 1000);

  }, [setNewsletterImage]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>

        <div className={classes.left}>
          <div className={classes.leftImage} style={{
            backgroundImage: `url(${newsletterImage})`
          }} />
        </div>

        <div className={classes.right}>

          <div className={classes.rightHeader}>
            { model.right.header }
          </div>

          <div className={classes.rightBody}>
            { model.right.body }
          </div>

          <div className={classes.rightInputField}>
            <a style={{color: 'inherit', textDecoration: 'none'}} href="https://mailchi.mp/388e33ad3858/snowcodedesign" target="_blank" rel="noopener noreferrer">
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