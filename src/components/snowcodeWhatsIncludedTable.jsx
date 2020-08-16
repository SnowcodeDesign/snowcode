import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import VideocamIcon from '@material-ui/icons/Videocam';
import CropFreeIcon from '@material-ui/icons/CropFree';
import CreateIcon from '@material-ui/icons/Create';
import MicIcon from '@material-ui/icons/Mic';
import StorageIcon from '@material-ui/icons/Storage';
import BugReportIcon from '@material-ui/icons/BugReport';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 20,
    paddingBottom: 30
  },
  rootTable: {
    width: '100%',
    maxWidth: '1000px',
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
      width: '100vw',
      display: 'block',
    },
  },
  rootFeaturesCell: {
    [theme.breakpoints.down(950)]: {
      textAlign: 'center'
    },

    [theme.breakpoints.down(750)]: {
      width: '100vw',
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
  },
  featureImage: {
    display: 'inline',
    marginRight: 5,
    verticalAlign: 'top',
    color: theme.palette.secondary.main
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
    image: <MicIcon/>,
    text: 'Audio Engineering'
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
              <td>
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
    </div>
  );
}