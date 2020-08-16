import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '400px',
    padding: 20,
    background: theme.palette.primary.main
  },
  container: {
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    tableLayout: 'fixed',
  },
  title: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.4)'
  }
}));

export default function SnowcodePortfolioGrid({}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          PORTFOLIO
        </div>
      </div>
    </div>
  );
}