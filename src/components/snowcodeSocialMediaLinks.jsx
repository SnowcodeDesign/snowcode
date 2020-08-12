import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.contrastText,
    padding: 30,
    background: '#001d5a'
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '900px',
  },
  left: {
    display: 'inline-block',
    verticalAlign: 'top',
    paddingTop: 6
  },
  right: {
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: 60
  },
  brand: {
    display: 'inline-block',
    fontWeight: 700,
    fontSize: '1.2rem'
  },
  brandImage: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: 4
  },
  iconTable: {
    tableLayout: 'fixed',
  },
  iconRow: {

  },
  iconCell: {
    paddingRight: 4,
    cursor: 'pointer',
    opacity: 0.5,

    '&:hover': {
      opacity: 1.0
    },

    '& > a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  linkTable: {
    width: '100%',

    '& > thead': {

    },
    '& > tbody': {
      color: 'rgba(255,255,255,0.6)'
    },
  },
  linkRow: {

  },
  linkCell: {
    '& > a': {
      color: 'inherit',
      textDecoration: 'none'
    },

    '&:hover': {
      textDecoration: 'underline'
    },
  }
}));

export default function SnowcodeSocialMediaLinks({}) {
  const classes = useStyles();


  return (
    <div className={classes.root}><div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.brand}>
          <div className={classes.brandImage}>
            <AcUnitIcon />
          </div>

          Snowcode
        </div>

        <table className={classes.iconTable}>
          <tbody>
            <tr className={classes.iconRow}>
              <td className={classes.iconCell}>
                <a href="http://twitter.com/snowcodedesign" target="_blank">
                  <TwitterIcon />
                </a>
              </td>

              <td className={classes.iconCell}>
                <a href="http://instagram.com/snowcodedesign" target="_blank">
                  <InstagramIcon />
                </a>
              </td>

              <td className={classes.iconCell}>
                <a className="mailtoui" href="mailto:snowcodedesign@gmail.com" target="_blank">
                  <EmailIcon />
                  </a>
              </td>

              <td className={classes.iconCell}>
                <a href="https://www.youtube.com/channel/UCg6wT2Sa-Pa2UsR8GHzLojg" target="_blank">
                  <YouTubeIcon />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.right}>
        <table className={classes.linkTable}>
          <thead>
            <tr>
              <td>
                SOCIAL MEDIA
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="http://twitter.com/snowcodedesign" target="_blank">
                  Twitter
                </a>
              </td>
            </tr>
             <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="http://instagram.com/snowcodedesign" target="_blank">
                  Instagram
                </a>
              </td>
            </tr>
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a className="mailtoui" href="mailto:snowcodedesign@gmail.com" target="_blank">
                  Email
                </a>
              </td>
            </tr>
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://www.youtube.com/channel/UCg6wT2Sa-Pa2UsR8GHzLojg" target="_blank">
                  YouTube
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div></div>
  );
}