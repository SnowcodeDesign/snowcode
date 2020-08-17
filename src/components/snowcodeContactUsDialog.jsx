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
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

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
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 14,
    color: '#000'
  },
  separator: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 700,
    fontSize: '1.2rem',
    color: 'rgba(0,0,0,0.2)',
  },
  formButton: {
    marginTop: 20
  }
}));

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function SnowcodeContactUsDialog({ open, onCloseClick, onFormSubmit }) {
  const classes = useStyles();

  const [emailAddressValue, setEmailAddressValue] = React.useState('');
  const [projectDescriptionValue, setProjectDescriptionValue] = React.useState('');
  const [expectedBudgetValue, setExpectedBudgetValue] = React.useState('');

  const [emailAddressError, setEmailAddressError] = React.useState(false);
  const [projectDescriptionError, setProjectDescriptionError] = React.useState(false);
  const [expectedBudgetError, setExpectedBudgetError] = React.useState(false);

  const handleSendEmailButtonClick = () => {
    onCloseClick();
  }

  const handleFormEmailAddressChange = (event) => {
    setEmailAddressValue(event.target.value);
  }

  const handleFormProjectDescriptionChange = (event) => {
    setProjectDescriptionValue(event.target.value);
  }

  const handleFormExpectedBudgetChange = (event) => {
    setExpectedBudgetValue(event.target.value);
  }

  const handleFormSendButtonClick = () => {
    const emailValid = emailAddressValue !== null && emailAddressValue.length > 0;
    const projDescValid = projectDescriptionValue !== null && projectDescriptionValue.length > 0;
    const budgetValid = expectedBudgetValue !== null && expectedBudgetValue.length > 0;

    setEmailAddressError(!emailValid);
    setProjectDescriptionError(!projDescValid);
    setExpectedBudgetError(!budgetValid);

    if (emailValid && projDescValid && budgetValid) {
      onFormSubmit({
        email: emailAddressValue,
        desc: projectDescriptionValue,
        budget: expectedBudgetValue,
      });

      setEmailAddressValue('');
      setProjectDescriptionValue('');
      setExpectedBudgetValue('');

      onCloseClick();
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={onCloseClick} fullWidth>
        <DialogTitle className={classes.title} onClick={onCloseClick}>
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
              We're available <b>today</b> to get started.
            </div>

            <div className={classes.form}>

              <TextField
                error={ emailAddressError }
                color="secondary"
                margin="dense"
                label="Enter your email address"
                type="email"
                fullWidth
                value={ emailAddressValue }
                onChange={ handleFormEmailAddressChange }
              />

              <TextField
                error={ projectDescriptionError }
                color="secondary"
                margin="dense"
                label="Project Description"
                type="text"
                fullWidth
                value={ projectDescriptionValue }
                onChange={ handleFormProjectDescriptionChange }
              />

              <TextField
                error={ expectedBudgetError }
                color="secondary"
                margin="dense"
                label="Expected Budget"
                type="text"
                fullWidth
                value={ expectedBudgetValue }
                onChange={ handleFormExpectedBudgetChange }
              />

              <Button
                className={classes.formButton}
                color="secondary"
                variant="contained"
                fullWidth
                startIcon={ <InsertDriveFileIcon /> }
                onClick={ handleFormSendButtonClick }
              >
                Submit
              </Button>
            </div>

            <div className={classes.separator}>
              &mdash; OR &mdash;
            </div>

            <div className={classes.button}>
              
              <a className="mailtoui" href="mailto:julian@snowcode.design" style={{textDecoration: 'none'}}>
                <Button variant="contained" color="secondary" fullWidth startIcon={<MailOutlineIcon />} onClick={ handleSendEmailButtonClick }>

                  Write Email

                </Button>
              </a>
            </div>

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
