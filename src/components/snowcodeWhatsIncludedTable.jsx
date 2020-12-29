import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import VideocamIcon from '@material-ui/icons/Videocam';
import CropFreeIcon from '@material-ui/icons/CropFree';
import CreateIcon from '@material-ui/icons/Create';
import StorageIcon from '@material-ui/icons/Storage';
import BugReportIcon from '@material-ui/icons/BugReport';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 20,
    paddingBottom: 30,
    overflow: 'hidden'
  },
  rootTable: {
    width: '100%',
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rootTextCell: {
    width: '300px',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '1.7rem',

    [theme.breakpoints.down(950)]: {
      width: '240px',
    },

    [theme.breakpoints.down(750)]: {
      width: '100%',
      display: 'block',
    },
  },
  rootFeaturesCell: {
    [theme.breakpoints.down(950)]: {
      textAlign: 'center'
    },

    [theme.breakpoints.down(750)]: {
      width: '100%',
      display: 'block',
      textAlign: 'center',
    },
  },
  rootTextCellButton: {
    marginTop: 10,
  },
  feature: {
    width: '180px',
    display: 'inline-block',
    height: '30px',
    margin: 10,
    textAlign: 'left'
  },
  featureImage: {
    display: 'inline',
    marginRight: 5,
    verticalAlign: 'top',
    color: theme.palette.secondary.main
  },
  featureText: {
    verticalAlign: 'top',
    lineHeight: 1,
    paddingTop: 6
  },

  platforms: {
    padding: 0,
    paddingBottom: 40,

    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  textPanelHeader: {
    textAlign: 'left',
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.4)',
    
    paddingTop: 50,
    paddingBottom: 20,
  },

  platformGroup: {
    textAlign: 'center',
    margin: 'auto'
  },

  platformCell: {
    display: 'inline',
    padding: 15,

    [theme.breakpoints.up(522)]: {
      paddingLeft: 30,
      paddingRight: 30
    }
  },

  platformImage: {
    color: theme.palette.grey,
    opacity: 0.4,
    display: 'inline',

    fontSize: '40px',
    width: 100,

    lineHeight: 2.0,
    verticalAlign: 'top',

    '& > svg': {
      margin: 0,
      height: 34,
      width: 34,
    },

    '& > img': {
      margin: 0,
      height: 38,
      width: 38,
    }
  },

  maxSizeBR: {
    display: 'block',

    [theme.breakpoints.down(915)]: {
      display: 'none',
    },
  }
}));

export default function SnowcodeWhatsIncludedTable({ onContactUsClick }) {
  const classes = useStyles();

  const features = [ {
    image: <CropFreeIcon/>,
    text: 'Full-Stack Engineering'
  },{
    image: <CreateIcon/>,
    text: 'Website & App Design'
  }, {
    image: <VideocamIcon/>,
    text: 'Video Production'
  }, {
    image: <SportsEsportsIcon/>,
    text: 'Game Development'
  }, {
    image: <BugReportIcon/>,
    text: 'Production Testing'
  }, {
    image: <StorageIcon/>,
    text: 'Database Management'
  }, {
    image: <TwitterIcon/>,
    text: 'Brand & Social Media Design'
  }, {
    image: <AppleIcon/>,
    text: 'iOS & Android Development'
  }, {
    image: <Brightness6Icon/>,
    text: 'Large-Scale Artwork & Imagery'
  }, 
  ];

  const featuresElements = features.map(f => {
    return (
      <div className={classes.feature}>
        <table>
          <tbody>
            <tr>
              <td>
                <div className={classes.featureImage}>
                  {f.image}
                </div>
              </td>
              <td className={classes.featureText}>
                { f.text }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });

  const featuresTable = (
    <div>
      { featuresElements }
    </div>
  );

  const platformElements = [{
    image: (
      <i class="fab fa-apple"></i>
    )
  }, {
    image: (
      <i class="fab fa-windows"></i>
    )
  }, {
    image: (
      <i class="fab fa-google-play"></i>
    )
  }, {
    image: (
      <i class="fab fa-chrome"></i>
    )
  }, {
    image: (
      <i class="fab fa-ubuntu"></i>
    )
  }, {
    image: (
      <i class="fab fa-github"></i>
    )
  },  {
    image: (
      <i class="fab fa-discord"></i>
    )
  }, {
    image: (
      <i class="fab fa-slack"></i>
    )
  },  {
    image: (
      <i class="fab fa-amazon"></i>
    )
  }];

  const platformElementComponents = platformElements.map(cell => {
    return (
      <div className={classes.platformCell}>
        <div className={classes.platformImage}>
          { cell.image }
        </div>
      </div>
    );
  });
  
  const languageElements = [{
    image: (
      <i class="fab fa-swift"></i>
    )
  }, {
    image: (
      <i class="fab fa-js-square"></i>
    )
  }, {
    image: (
      <i class="fab fa-python"></i>
    )
  }, {
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <path d="M1.734 32l15.068-15.333 15.198 15.333zM0 0h16l-16 16.667zM17.865 0l-17.865 18.667v13.333l32-32z"/>
      </svg>
    )
  }, {
    image: (
      <i class="fab fa-html5"></i>
    )
  }, {
    image: (
      <i class="fab fa-css3-alt"></i>
    )
  },   {
    image: (
      <i class="fab fa-php"></i>
    )
  }, {
    image: (
      <i class="fab fa-java"></i>
    )
  },{
    image: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path></svg>
    )
  }, ];

  const languageElementComponents = languageElements.map(cell => {
    return (
      <div className={classes.platformCell}>
        <div className={classes.platformImage}>
          { cell.image }
        </div>
      </div>
    );
  });

  const toolElements = [{
    image: (
      <i class="fab fa-vuejs"></i>
    )
  }, {
    image: (
      <i class="fab fa-react"></i>
    )
  }, {
    image: (
      <i class="fab fa-squarespace"></i>
    )
  }, {
    image: (
      <i class="fab fa-wix"></i>
    )
  }, {
    image: (
      <i class="fab fa-wordpress-simple"></i>
    )
  }, {
    image: (
      <i class="fab fa-weebly"></i>
    )
  }, {
    image: (
      <i class="fab fa-bootstrap"></i>
    )
  }, {
    image: (
      <i class="fab fa-angular"></i>
    )
  }, {
    image: (
      <i class="fab fa-node-js"></i>
    )
  }, {
    image: (
      <i class="fab fa-sketch"></i>
    )
  }, {
    image: ( 
      <i class="fab fa-buffer"></i>
    )
  }, {
    image: (
      <i class="fab fa-atlassian"></i>
    )
  },  {
    image: (
      <i class="fab fa-docker"></i>
    )
  }, {
    image: (
      <i class="fas fa-raygun"></i>
    )
  }, {
    image: (
      <i class="fab fa-algolia"></i>
    )
  }, {
    image: (
      <i class="fab fa-invision"></i>
    )
  }, {
    image: (
      <i class="fab fa-markdown"></i>
    )
  }, {
    image: (
      <i class="fab fa-jenkins"></i>
    )
  }, {
    image: (
      <i class="fab fa-less"></i>
    )
  }, {
    image: (
      <i class="fab fa-npm"></i>
    )
  }, {
    image: (
      <i class="fab fa-cpanel"></i>
    )
  }, {
    image: (
      <i class="fab fa-yarn"></i>
    )
  }, {
    image: (
      <i class="fab fa-intercom"></i>
    )
  }];

  const toolElementComponents = toolElements.map(cell => {
    return (
      <div className={classes.platformCell}>
        <div className={classes.platformImage}>
          { cell.image }
        </div>
      </div>
    );
  });

  const integrationElements = [{
    image: (
      <i class="fab fa-foursquare"></i>
    )
  }, {
    image: (
      <i class="fab fa-gitlab"></i>
    )
  },  {
    image: (
      <i class="fab fa-reddit-alien"></i>
    )
  }, {
    image: (
      <i class="fab fa-shopify"></i>
    )
  }, {
    image: (
      <i class="fab fa-salesforce"></i>
    )
  }, {
    image: (
      <i class="fab fa-mailchimp"></i>
    )
  }, {
    image: (
      <i class="fab fa-spotify"></i>
    )
  }, {
    image: (
      <i class="fab fa-stripe-s"></i>
    )
  }, {
    image: (
      <i class="fab fa-paypal"></i>
    )
  }, {
    image: (
      <i class="fab fa-yelp"></i>
    )
  }, {
    image: (
      <i class="fab fa-stack-overflow"></i>
    )
  }, {
    image: (
      <i class="fab fa-twitch"></i>
    )
  }, {
    image: (
      <i class="fab fa-behance"></i>
    )
  }, {
    image: (
      <i class="fab fa-dribbble"></i>
    )
  }, {
    image: (
      <i class="fab fa-instagram"></i>
    )
  }, {
    image: (
      <i class="fab fa-angellist"></i>
    )
  }, {
    image: (
      <i class="fab fa-linkedin"></i>
    )
  }, 
  {},
  {
    image: (
      <i class="fab fa-product-hunt"></i>
    )
  }, {
    image: (
      <i class="fab fa-twitter"></i>
    )
  }, {
    image: (
      <i class="fab fa-tumblr"></i>
    )
  }, {
    image: (
      <i class="fab fa-soundcloud"></i>
    )
  }, {
    image: (
      <i class="fab fa-bandcamp"></i>
    )
  }, {
    image: (
      <i class="fab fa-lastfm"></i>
    )
  }];

  const integrationElementComponents = integrationElements.map(cell => {
    if (!cell.image) {
      return (
        <div className={classes.maxSizeBR}></div>
      );
    }

    return (
      <div className={classes.platformCell}>
        <div className={classes.platformImage}>
          { cell.image }
        </div>
      </div>
    );
  });

  const platformsComponent = (
    <div className={classes.platforms}>
      <div className={classes.textPanelHeader}>
        PLATFORMS
      </div>

      <div className={classes.platformGroup}>
        { platformElementComponents }
      </div>

      <div className={classes.textPanelHeader}>
        LANGUAGES
      </div>

      <div className={classes.platformGroup}>
        { languageElementComponents }
      </div>

      <div className={classes.textPanelHeader}>
        TOOLS &amp; LIBRARIES
      </div>

      <div className={classes.platformGroup}>
        { toolElementComponents }
      </div>

      <div className={classes.textPanelHeader}>
        INTEGRATIONS &amp; NETWORKS
      </div>

      <div className={classes.platformGroup}>
        { integrationElementComponents }
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <table className={classes.rootTable}>
        <tbody>
          <tr>
            <td className={classes.rootTextCell}>
              <div>
                What's Included
                <div className={classes.rootTextCellButton}>
                  <Button variant="outlined" color="secondary" onClick={onContactUsClick}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </td>

            <td className={classes.rootFeaturesCell}>
              { featuresTable }
            </td>
          </tr>
        </tbody>
      </table>

      { platformsComponent }
    </div>
  );
}