import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import '@fortawesome/fontawesome-pro/css/all.css';

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

    '& > * > table': {
      paddingRight: 26,
    }
  },
  left: {
    display: 'inline-block',
    verticalAlign: 'top',
    paddingTop: 6
  },
  right: {
    display: 'inline-block',
    verticalAlign: 'top',
    paddingTop: 6,
    paddingLeft: 0,
  },
  rightLink: {
    paddingTop: 6,
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: 0,
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
    },

    '& > a > i': {
      fontSize: '1.3rem'
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
  },
}));

export default function SnowcodeSocialMediaLinks() {
  const classes = useStyles();

  const handlePressClick = () => {
    const baseURL = process.env.REACT_APP_FRONT_URL;
    window.location = `${baseURL}/?press`;
  }

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
                <a href="http://twitter.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
              </td>

              <td className={classes.iconCell}>
                <a href="http://github.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                </a>
              </td>

              <td className={classes.iconCell}>
                <a href="https://angel.co/company/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-angellist"></i>
                </a>
              </td>

              <td className={classes.iconCell}>
                <a href="https://www.linkedin.com/company/snowcode/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              </td>
            </tr>

            <tr className={classes.iconRow}>
              <td className={classes.iconCell}>
                <a href="http://instagram.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </td>

              <td className={classes.iconCell}>
                <a className="mailtoui" href="mailto:julian@snowcode.design" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-envelope"></i>
                </a>
              </td>

              <td className={classes.iconCell}>
                <a href="https://mailchi.mp/388e33ad3858/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-mailchimp"></i>
                </a>
              </td>


              <td className={classes.iconCell}>
                <a href="https://www.youtube.com/channel/UCq-bTk7aD-2uPves0XU-K7A" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-youtube-square"></i>
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
                CONTACT
              </td>
            </tr>
          </thead>

          <tbody>

            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a className="mailtoui" href="mailto:julian@snowcode.design" target="_blank" rel="noopener noreferrer"> 
                  Email
                </a>
              </td>
            </tr>


            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="http://twitter.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>



      <div className={classes.rightLink}>
        <table className={classes.linkTable}>
          <thead>
            <tr>
              <td>
                NEWS
              </td>
            </tr>
          </thead>

          <tbody>

            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="/?press" onClick={ handlePressClick }>
                  Press
                </a>
              </td>
            </tr>
           
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://mailchi.mp/388e33ad3858/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  Newsletter
                </a>
              </td>
            </tr> 

          </tbody>
        </table>
      </div>

      <div className={classes.rightLink}>
        <table className={classes.linkTable}>
          <thead>
            <tr>
              <td>
                LINKS
              </td>
            </tr>
          </thead>

          <tbody>

            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://github.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </td>
            </tr>
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://angel.co/company/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  AngelList
                </a>
              </td>
            </tr>
            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://www.linkedin.com/company/snowcode/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>


      <div className={classes.rightLink}>
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
                <a href="http://instagram.com/snowcodedesign" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </td>
            </tr>

           <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://www.producthunt.com/@snowcodedesign" target="_blank" rel="noopener noreferrer">
                  Product Hunt
                </a>
              </td>
            </tr>

            <tr className={classes.linkRow}>
              <td className={classes.linkCell}>
                <a href="https://www.youtube.com/channel/UCq-bTk7aD-2uPves0XU-K7A" target="_blank" rel="noopener noreferrer">
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