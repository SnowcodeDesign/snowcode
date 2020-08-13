import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: '0.5px rgba(0,0,0,0.1) solid'
  },
  menuButton: {
  },

  toolbar: {
    width: '100%',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    flexGrow: 1,
    lineHeight: 1,
    fontSize: '1.35rem'
  },
  titleSuffix: {
    opacity: 0.8,
    fontSize: '0.8rem',
  },

  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },

  desktop: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },

  toolbarButton: {
    color: 'inherit',
    textTransform: 'none'
  }
}));

export default function SnowcodeAppBar({ theme, onPricingClick, onBuyNowClick, onLogoClick }) {
  const classes = useStyles();

  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleMobileMenuButtonClick = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  }

  const handleMobileMenuCloseClick = (event) => {
    setMobileMenuAnchor(null);
  }

  const handlePricingClick = () => {
    setMobileMenuAnchor(null);
    onPricingClick();
  }

  const handleBuyNowClick = () => {
    setMobileMenuAnchor(null);
    onBuyNowClick();
  }

  const mobileToolbar = (
    <div>
      <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={ handleMobileMenuButtonClick }>
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={mobileMenuAnchor}
        keepMounted
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuCloseClick}
      >
        <MenuItem onClick={handlePricingClick}>Pricing</MenuItem>
        <MenuItem style={{
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText
        }} onClick={handleBuyNowClick}>Buy Now</MenuItem>
      </Menu>
    </div>
  );

  const desktopToolbar = (
    <div>
      <Button onClick={handlePricingClick} className={classes.toolbarButton}>Pricing <ExpandMoreIcon /></Button>
      <Button onClick={handleBuyNowClick} variant="contained" color="secondary">Buy Now</Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" onClick={ onLogoClick }>
            <AcUnitIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Snowcode 
          </Typography>

          <div className={classes.mobile}>
            { mobileToolbar }
          </div>

          <div className={classes.desktop}>
            { desktopToolbar }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}