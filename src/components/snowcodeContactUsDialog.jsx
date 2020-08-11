import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
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
    paddingTop: 20,
    paddingBottom: 40,
  }
}));

export default function SnowcodeContactUsDialog({ open, onCloseClick, onSendEmailButtonClick }) {
  const classes = useStyles();

  return (
    <div>
      <Dialog open={open} onClose={onCloseClick} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle className={classes.title} id="alert-dialog-slide-title">
          <div className={classes.titleIcon}>
            <AcUnitIcon />
          </div>

          <div className={classes.titlePrefix}>
            {'Snowcode'}
          </div>

          <div className={classes.titleSuffix}>
            {'Buy Now '}
          </div>

          <IconButton aria-label="close" className={classes.closeButton} onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>

            <div className={classes.content}>
              Click below to send us an email! We're available <b>today</b> to get started. We are working on a way to chat with us directly, coming soon.
            </div>

            <div className={classes.button}>
              
              <a className="mailtoui" href="mailto:snowcodedesign@gmail.com" style={{textDecoration: 'none'}}>
                <Button variant="contained" color="secondary" fullWidth startIcon={<MailOutlineIcon />} onClick={ onSendEmailButtonClick }>

                  Send Email

                </Button>
              </a>
            </div>

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
