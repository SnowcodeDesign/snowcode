import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    minWidth: '444px',
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
    display: 'none'
  },

  desktop: {
  },

  toolbarButton: {
    color: 'inherit',
    textTransform: 'none'
  }
}));

export default function SnowcodeAppBar() {
  const classes = useStyles();

  const mobileToolbar = (
    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  );

  const desktopToolbar = (
    <div>
      <Button className={classes.toolbarButton}>Clients <ExpandMoreIcon /></Button>
      <Button className={classes.toolbarButton}>Pricing <ExpandMoreIcon /></Button>
      <Button variant="contained" color="secondary">Buy Now</Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit">
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