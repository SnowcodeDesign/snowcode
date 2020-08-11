import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    textAlign: 'center',
    background: theme.palette.background.default
  },
  header: {
    marginTop: 8,
  },
  headerTitle: {
    fontSize: '1.3rem',
    fontWeight: 800,
  },
  headerBody: {
    fontSize: '0.9rem',
    opacity: 0.6,
    marginTop: 8,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  grid: {
    marginTop: 26,
    padding: 20,

    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gridTable: {
    width: '100%',
    tableLayout: 'fixed'
  },
  cell: {
    width: '100%',
    display: 'inline-block',
    padding: 10,

    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
    }
  },
  cellImage: {
    color: theme.palette.secondary.main
  },
  cellTitle: {
    fontWeight: 800,
  },
  cellBody: {
    opacity: 0.6
  }
}));

export default function SnowcodeFeaturesGrid({ theme }) {
  const classes = useStyles();

  const headerTitle = "Let us design, develop, and ship ";
  const headerTitleSuffix = "your next big idea";
  const headerBody = "Snowcode is a contract software development and design firm with a pool of artists and creatives. We create high-end software, video production, and graphic design for the lowest market price.";

  const headerComponent = (
    <div className={classes.header}>
      <div className={classes.headerTitle}>
        { headerTitle }<span style={{color: theme.palette.primary.contrastText}}>{ headerTitleSuffix }</span>
      </div>

      <div className={classes.headerBody}>
       { headerBody }
      </div>
    </div>
  );

  const gridCells = [{
    image: <AcUnitIcon />,
    title: 'Feature title',
    body: 'Subtitle subtitle',
  }, {
    image: (
      <AcUnitIcon />
    ),
    title: 'Feature title',
    body: 'Subtitle subtitle',
  }, {
    image: (
      <AcUnitIcon />
    ),
    title: 'Feature title',
    body: 'Subtitle subtitle',
  }, {
    image: (
      <AcUnitIcon />
    ),
    title: 'Feature title',
    body: 'Subtitle subtitle',
  }];
  const gridCellComponents = gridCells.map(cell => {
    return (
      <div className={classes.cell}>
        <div className={classes.cellImage}>
          { cell.image }
        </div>
        <div className={classes.cellTitle}>
          { cell.title }
        </div>
        <div className={classes.cellBody}>
          { cell.body }
        </div>
      </div>
    );
  });
  const gridComponent = (
    <div className={classes.grid}>
     { gridCellComponents }
    </div>
  );

  return (
    <div className={classes.root}>
      { headerComponent }
      { gridComponent }
    </div>
  );
}