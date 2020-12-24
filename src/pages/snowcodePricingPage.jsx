import React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
    dialog: {
      '& > .MuiDialog-container': {
         background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,1) 43%, rgba(110,146,247,1) 44%, rgba(110,146,247,1) 100%)',
  
      }
    },
    dialogContent: {
      background: 'none',
      padding: 0,
    },
    dialogContentText: {
      background: 'linear-gradient(7deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 61%, rgba(110,146,247,1) 62%, rgba(110,146,247,1) 100%)',
  
      [theme.breakpoints.down(809)]: {
        background: 'linear-gradient(7deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 72%, rgba(255,255,255,1) 73%, rgba(110,146,247,1) 74%, rgba(110,146,247,1) 100%)',
      },
  
      padding: 0,
      margin: 0,
    },
    title: {
      background: theme.palette.primary.main,
      paddingTop: 24,
      paddingBottom: 10,
      borderBottom: '1px rgba(0,0,0,0.1) solid'
    },
    titleIcon: {
      display: 'inline-block',
      color: theme.palette.secondary.main,
      paddingRight: 10,
    },
    titlePrefix: {
      display: 'inline-block',
      color: theme.palette.secondary.main,
      lineHeight: 1,
      verticalAlign: 'top',
    },
    titleSuffix: {
      display: 'inline-block',
      lineHeight: 1,
      verticalAlign: 'top',
      paddingLeft: 10
    },
  
    content: {
      paddingBottom: 20,
    },
  
    contentHeader: {
      paddingTop: 32,
      paddingBottom: 26,
      paddingLeft: 20,
      paddingRight: 20,
  
      fontSize: '40px',
      fontWeight: 300,
      lineHeight: 1,
  
      letterSpacing: 0,
      textAlign: 'center',
      color: theme.palette.secondary.contrastText,
  
      [theme.breakpoints.down(630)]: {
        maxWidth: '380px',
        marginRight: 'auto',
        marginLeft: 'auto'
      },
    },
  
    contentHeaderSubtitle: {
      paddingTop: 18,
  
      fontSize: '20px',
      color: theme.palette.secondary.contrastText,
      opacity: 0.8,
      fontWeight: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '550px',
  
      lineHeight: 1.2,
  
      // [theme.breakpoints.down(630)]: {
      //   maxWidth: '500px',
      // },
  
      [theme.breakpoints.down(630)]: {
        maxWidth: '340px',
      },
    },
  
    contentSeparator: {
      height: '3px',
      // width: 'calc(100% + 49px)',
      // marginLeft: '-25px',
    },
  
    desktopContent: {
      padding: 10,
      display: 'none',
      width: '100%',
  
      [theme.breakpoints.up(809)]: {
        display: 'block',
  
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    desktopTable: {
      width: '100%',
      paddingTop: 0,
      background: 'rgba(255,255,255,1)',
      borderRadius: 12,
      boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
    },
  
    desktopRow: {
      display: 'table',
      width: '100%',
  
      '& > td:nth-child(1)': {
        borderRight: '1px solid rgba(0,0,0,0.05)'
      },
  
      '& > td:nth-child(2)': {
        borderRight: '1px solid rgba(0,0,0,0.05)'
      },
  
      '& > td:nth-child(3)': {
        borderRight: '1px solid rgba(0,0,0,0.05)'
      }
    },
  
    desktopCell: {
      width: '25%',
      padding: 18,
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      verticalAlign: 'top',
      display: 'table-cell',
    },
  
    desktopCellTitle: {
      fontSize: '1.4rem',
      display: 'flex',
      lineHeight: 1,
      fontWeight: 800,
      color: theme.palette.secondary.main
    },
  
    desktopCellDescription: {
      paddingTop: 4,
      fontSize: '0.9rem',
      fontWeight: 500,
      color: 'rgba(0,0,0,1)',
      // height: '100px',
  
      // [theme.breakpoints.down(890)]: {
      //   height: '120px',
      // },
  
      // [theme.breakpoints.down(860)]: {
      //   height: '136px',
      // },
  
      // [theme.breakpoints.down(790)]: {
      //   height: '146px',
      // },
  
      // [theme.breakpoints.down(770)]: {
      //   height: '170px',
      // },
  
      // [theme.breakpoints.down(750)]: {
      //   height: '200px',
      // },
  
      // [theme.breakpoints.down(641)]: {
      //   height: '120px',
      // },
    },
  
    desktopCellPrice: {
      fontSize: '1.15rem',
      fontWeight: 800,
      color: 'rgba(0,0,0,1)',
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
    },
  
    desktopCellPriceCell: {
      width: '25%',
      padding: 10,
      verticalAlign: 'bottom',
      display: 'table-cell',
    },
  
    desktopCellPriceSuffix: {
      color: 'rgba(0,0,0,0.6)',
      fontSize: '0.9rem'
    },
  
    mobileTable: {
      background: 'rgba(255,255,255,1)',
      borderRadius: 12,
      boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
      width: '100%',
      paddingTop: 0,
  
      '& > tbody > tr:nth-child(2) > td': {
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }
    },
  
    mobileContent: {
      padding: 10,
      display: 'inline-block',
  
      [theme.breakpoints.up(809)]: {
        display: 'none',
      },
    },
  
    mobileRow: {
      '& > td': {
        paddingTop: 20,
      },
      '& > td:nth-child(1)': {
        borderRight: '1px solid rgba(0,0,0,0.05)',
      },
    },
  
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    getStartedButton: {
    },
    footer: {
      opacity: 0.5
    },
    desktopCellContactUsButton: {
      marginBottom: 10,    
    }
  }));
  


export default function SnowcodePricingPage({ theme, onBuyNowFormSubmit }) {
  const classes = useStyles();

  const handleButtonClick = () => {
    const baseURL = process.env.REACT_APP_FRONT_URL;
    window.location = `${baseURL}/?contact`;
  }

  const desktopCellItems = [{
    title: 'Flurries',
    description: (
      <span>
      {'Break free from Wix, Squarespace, Shopify, and one size fits all solutions. Flurries is for artists, social media influencers, new businesses, and creative professionals looking to build an online presence. From online shops to professional-grade portfolios, we can create a whole lot with a teensy tiny budget. Try to find our suite of services for cheaper!'}<br/><br/>
      </span>)
    ,
    prices: {
      'mo': '$25',
    },
  }, {
    title: 'Artisan',
    description: (
      <span>
      {'Craftsmanship with a serious set of expertise. Build a platform for your ideas, feed content into your growing projects, and publish cutting-edge concepts with the most competitive prices available. From frequently-updated restaurant pages to fledgling social media publications, get your passion in front of the world quickly and with confidence.'}<br/><br/>
      </span>)
    ,
    prices: { 
      'site': '$300',
      'mo': '$25',
    }
  }, {
    title: 'Growing',
    description: (
      <span>
      {'A dedicated agent and all of our on-demand services at the best rate for a growing small business. Create cross-platform social media networks and apps for iOS and Android, scale to handle thousands of users, and deploy multiple projects at the same time without needing any other content providers, marketing representatives, or software development teams.'}<br/><br/>
      </span>),
    prices: { 
      'site': '$1,000',
      'mo': '$250',
    }
  }, {
    title: 'Enterprise',
    description: 'Bring on board a whole team of engineers and artists to tackle extremely ambitious creative and technological feats. Answer the big questions about your company and your customers without breaking the bank. Our crew will work full-time to develop programming, graphic design, video production, and audio engineering work around the clock.'
    ,
  }];

  

  const desktopTitleDescriptionCells = desktopCellItems.map(item => {
    return (
      <td className={classes.desktopCell}>
        <div className={classes.desktopCellTitle}>
          {item.title}
        </div>

        <div className={classes.desktopCellDescription}>
          {item.description}
        </div>
      </td>
    );
  });

  const desktopPriceCells = desktopCellItems.map(item => {
    return (
      <td className={classes.desktopCellPriceCell}>
        { !item.prices ? (
          <Button className={classes.desktopCellContactUsButton} fullWidth variant="outlined" color="secondary" onClick={handleButtonClick}>
            Contact Us
          </Button>
        ) : (
          <div className={classes.desktopCellPrice}>
            { Object.keys(item.prices).map(time => {
              return (
                <div>
                  { item.prices[time] }
                  <span className={classes.desktopCellPriceSuffix}>
                    /{ time }
                  </span>
                </div>
              );
            }) }
          </div>
        ) }

        <div className={classes.getStartedButton}>
          <Button fullWidth variant="contained" color="secondary" onClick={handleButtonClick}>
            Get Started
          </Button>
        </div>
      </td>
    );
  });

  const desktopContent = (
    <div className={classes.desktopContent}>
      <table className={classes.desktopTable}>
        <tbody>
          <tr className={classes.desktopRow}>

           { desktopTitleDescriptionCells }

          </tr>

          <tr className={classes.desktopRow}>

           { desktopPriceCells }

          </tr>
        </tbody>
      </table>

    </div>
  );

  const mobileContent = (
    <div className={classes.mobileContent}>
      <table className={classes.mobileTable}>
        <tbody>
          <tr className={classes.mobileRow}>
           { desktopTitleDescriptionCells.slice(0, 2) }
          </tr>

          <tr className={classes.mobileRow}>
           { desktopPriceCells.slice(0, 2) }
          </tr>

          <tr className={classes.mobileRow}>
           { desktopTitleDescriptionCells.slice(2) }
          </tr>

          <tr className={classes.mobileRow}>
           { desktopPriceCells.slice(2) }
          </tr>
        </tbody>
      </table>

    </div>
  );

  const content = (
    <div className={classes.content}>
      { mobileContent }
      { desktopContent }
    </div>
  );

  return (
    <div className={classes.root}>
      
        <DialogTitle 
          className={classes.title} 
          id="alert-dialog-slide-title" 
        >
            <a href={ process.env.REACT_APP_FRONT_URL }>
          <div className={classes.titleIcon}>
            <AcUnitIcon />
          </div>

          <div className={classes.titlePrefix}>
            {'Snowcode'}
          </div>
          </a>

          <div className={classes.titleSuffix}>
            {'Pricing '}
          </div>
        </DialogTitle>
        
        <DialogContent className={ classes.dialogContent }>
          <DialogContentText className={ classes.dialogContentText} id="alert-dialog-slide-description">
            
            <div className={classes.contentHeader}>
              
              Ready to build something <b>great</b>?

              <div className={classes.contentHeaderSubtitle}>
                <span style={{fontWeight: 800}}>Flexibility</span> and <span style={{fontWeight: 800}}>inclusivity</span> are two of Snowcode's core values. If you have a specific budget in mind already, reach out and we'll make it work!
              </div>
            </div>

            <div className={classes.contentSeparator}>
            </div>

            { content }


            <div className={classes.footer}>
              <SnowcodeRochesterLogo 
                theme={ theme }
                useDark={ false }
              />
            </div>

          </DialogContentText>
        </DialogContent>
    </div>
  );
}
