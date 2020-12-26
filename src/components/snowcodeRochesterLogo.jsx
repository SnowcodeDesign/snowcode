import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import preval from 'preval.macro';
import Tooltip from '@material-ui/core/Tooltip';

import rochesterLogo from '../img/Logo_of_Rochester,_New_York.svg';
import philadelphiaLogo from '../img/white-00ca472cc3ffe59c94e540450c11b2c3.png';
import philadelphiaDarkerLogo from '../img/00ca472cc3ffe59c94e540450c11b2c3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,

    '& > * > a': {
      color: 'inherit',
      textDecoration: 'none'
    }
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
  },

  attribution: {
    fontSize: "12px",
    fontWeight: 400,
    textAlign: 'justify',
    padding: "10px 40px 10px 40px",
    maxWidth: "800px"
  }
}));

export default function SnowcodeRochesterLogo({ theme, useDark=false }) {
  const classes = useStyles();
  const compileDateString = preval`module.exports = new Date().toLocaleString("en").toLowerCase();`;
  const gitTagVersionString = process.env.REACT_APP_SNOWCODE_TAG;
  const composedTooltipString = `Thanks for coming! v${gitTagVersionString} from ${compileDateString}`;

  const rootStyle = useDark !== true ? {} : {
    background: '#001d5a',
    color: theme.palette.secondary.contrastText
  };

  return (
    <div className={classes.root} style={ rootStyle }>
      <center>
        <img className={ classes.image } src={ rochesterLogo } alt="Rochester" />

        <a target='_blank' href="https://github.com/SnowcodeDesign/snowcode" rel="noopener noreferrer">
          <Tooltip title={ composedTooltipString } arrow placement="top">
            <div className={classes.footer}>
              Made with <img alt="love" className={classes.footerImage} src={ useDark === true ? philadelphiaLogo : philadelphiaDarkerLogo } /> in Rochester, NY
              <br/>
              &copy; 2020 Snowcode, LLC

              <div className={classes.attribution}>
              The following organization and/or company trademarks and/or copyrighted icons are used to represent their respective organizations and/or companies and are not meant to represent any affiliation or connection between Snowcode, LLC and said organizations or companies: Apple (Apple, Inc), Windows (Microsoft), Google Play (Google), Chrome (Google), Ubuntu, Github, Discord, Slack, Amazon, Swift (Apple, Inc), Javascript, Python, Kotlin, HTML5, CSS3, PHP, PHP, Java, C++, Vue.js, React.js, Squarespace, Wix, Wordpress, Weebly, Bootstrap, Angular, Node.js, Sketch, Buffer, Atlassian, Docker, Phaser, Algolia, Invision, Markdown, Jenkins, Less, NPM, cPanel, Yarn, Intercom, Foursquare, Gitlab, Reddit, Shopify, Salesforce, Mailchimp, Spotify, Stripe, Paypal, Yelp, StackOverflow, Twitch, Behance, Dribbble, Instagram (Facebook), AngelList, LinkedIn, Product Hunt, Twitter, Tumblr, Soundcloud, Bandcamp, Last.fm. These marks and/or brand images are not owned by Snowcode, LLC and are instead owned by their respective organizations and/or companies as listed above, registered in the U.S. and other countries. If anyone wishes to have a mark removed, please reach out immediately. Thanks so much! :)
              </div>
            </div>
          </Tooltip>
          </a>
      </center>
    </div>
  );
}