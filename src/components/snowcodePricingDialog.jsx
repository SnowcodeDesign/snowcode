import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';

import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
  },
  dialog: {
    '& > .MuiDialog-container': {
      background: 'none',
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
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: '1.8rem',
    letterSpacing: 0,
    lineHeight: 1.3,
    fontWeight: 800,
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
  },

  contentHeaderSubtitle: {
    fontSize: '0.9rem',
    color: theme.palette.secondary.contrastText,
    opacity: 0.65,
    fontWeight: 600,
    marginLeft: 'auto',
    marginRight: 'auto',

    maxWidth: '550px',


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
    color: 'rgba(0,0,0,1)'
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


export default function SnowcodePricingDialog({ theme, open, onCloseClick, onGetStartedClick, onContactUsClick }) {
  const classes = useStyles();

  const desktopCellItems = [{
    title: 'Individual',
    description: (
      <span>
      {'For new businesses and professionals looking to build an online presence. From apps to websites, we can create a whole lot with a tiny budget. Try to find our suite of services for cheaper!'}<br/><br/>
      </span>)
    ,
    prices: {
      'mo': '$500',
      'hr': '$25'
    },
    bullets: [
      'a landing site, portfolio, social media, or blog format'
    ]
  }, {
    title: 'Small Business',
    description: (
      <span>
      {'Build a platform for your growing business with the most competitive prices available. From landing pages to cross-platform social networks, get your big idea in front of the world.'}<br/><br/>
      </span>)
    ,
    prices: { 
      'mo': '$1,000',
      'hr': '$50'
    }
  }, {
    title: 'Large Business',
    description: (
      <span>
      {'Answer the big questions about your business. Create cross-platform networks, deep production testing, in-house architecture review and refactoring, at-scale database management.'}<br/><br/>
      </span>),
    prices: { 
      'mo': '$2,000',
      'hr': '$100'
    }
  }, {
    title: 'Enterprise',
    description: 'Bring our whole team of engineers and artists on board to tackle extremely ambitious technological feats. Our crew will work full-time to develop programming, graphic design, video production, and audio engineering work around the clock.'
    ,
  }];

  const desktopCells = desktopCellItems.map(item => {
    return (
      <td className={classes.desktopCell}>
        <div className={classes.desktopCellTitle}>
          {item.title}
        </div>

        <div className={classes.desktopCellDescription}>
          {item.description}
        </div>

        { !item.prices ? (
          <div className={classes.desktopCellPrice} />
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
          <Button fullWidth variant="contained" color="secondary" onClick={onGetStartedClick}>
            Get Started
          </Button>
        </div>
      </td>
    );
  });

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
          <Button className={classes.desktopCellContactUsButton} fullWidth variant="outlined" color="secondary" onClick={onContactUsClick}>
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
          <Button fullWidth variant="contained" color="secondary" onClick={onGetStartedClick}>
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
      <Dialog
        open={open}
        keepMounted
        onClose={onCloseClick}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        fullScreen
        className={classes.dialog}
        PaperProps={{
          style: {
            background: 'none'
          },
      }}>
        <DialogTitle 
          className={classes.title} 
          id="alert-dialog-slide-title" 
        >
          <div className={classes.titleIcon}>
            <AcUnitIcon />
          </div>

          <div className={classes.titlePrefix}>
            {'Snowcode'}
          </div>

          <div className={classes.titleSuffix}>
            {'Pricing '}
          </div>

          <IconButton aria-label="close" className={classes.closeButton} onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent className={ classes.dialogContent }>
          <DialogContentText className={ classes.dialogContentText} id="alert-dialog-slide-description">
            
            <div className={classes.contentHeader}>
              Create your best work with us

              <div className={classes.contentHeaderSubtitle}>
                We only create new contracts that have competitive, market-price rates and rapid, Fortune-500 quality. <span style={{fontWeight: 800}}>Flexibility</span> and <span style={{fontWeight: 800}}>inclusivity</span> are two of Snowcode's core values. If you have a specific budget in mind already, reach out and we'll make it work!
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
      </Dialog>
    </div>
  );
}
