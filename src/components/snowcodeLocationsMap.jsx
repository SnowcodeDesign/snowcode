import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import map from '../img/map.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '400px',
    padding: 20,
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rootTable: {
    tableLayout: 'fixed',
  },
  cell: {
    width: '50%',

    [theme.breakpoints.down('xs')]: {
      width: '70%',
    }
  },
  textPanel: {
    overflow: 'hidden',
    minWidth: '200px',
    paddingRight: 10
  },
  textPanelHeader: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.4)'
  },
  textPanelTitle: {
    paddingTop: 10,
    fontSize: '1.6rem',
    lineHeight: 1.2,
    fontWeight: 800,
  },
  textPanelBody: {
    paddingTop: 12,
    fontSize: '1rem',
    lineHeight: 1.2,
    color: 'rgba(0,0,0,0.4)'
  },
  textPanelTable: {
    marginTop: 20,
    tableLayout: 'fixed',
    width: '100%'
  },
  textPanelCell: {
    width: '100%',
    textAlign: 'center',
  },
  textPanelCellNum: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  textPanelCellText: {
    color: 'rgba(0,0,0,0.6)'
  },
  mapPanelImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
}));

export default function SnowcodeLocationsMap({ theme }) {
  const classes = useStyles();

  const textPanelHeaderText = 'LOCATIONS';
  const textPanelTitlePrefix = 'We are remote-first';
  const textPanelTitleText = 'with clients across the east coast.';
  const textPanelBodyText = 'Based in Rochester, NY, we primarily work remotely using state-of-the-art tech. Before founding our own company, our work was mostly focused in the New York City and Philadelphia region.';

  const textPanelFirstNumberVal = '20+';
  const textPanelFirstNumberLabel = 'Active Members';

  const textPanelSecondNumberVal = '170+';
  const textPanelSecondNumberLabel = 'Open Source Projects';

  const textPanelThirdNumberVal = '1mil+';
  const textPanelThirdNumberLabel = 'Project Downloads';

  const textPanel = (
    <div className={ classes.textPanel }>
      <div className={classes.textPanelHeader}>
        { textPanelHeaderText }
      </div>

      <div className={classes.textPanelTitle}>
        <span style={{color: theme.palette.secondary.main}}>
          { textPanelTitlePrefix }
        </span> { textPanelTitleText }
      </div>

      <div className={classes.textPanelBody}>
        { textPanelBodyText }
      </div>

      <table className={classes.textPanelTable}>
        <tbody>
          <tr>
            <td className={classes.textPanelCell}>
              <div className={classes.textPanelCellNum}>
                { textPanelFirstNumberVal }
              </div>
              <div className={classes.textPanelCellText}>
                { textPanelFirstNumberLabel }
              </div>
            </td>

            <td className={classes.textPanelCell}>
              <div className={classes.textPanelCellNum}>
                { textPanelSecondNumberVal }
              </div>
              <div className={classes.textPanelCellText}>
                { textPanelSecondNumberLabel }
              </div>
            </td>

            <td className={classes.textPanelCell}>
              <div className={classes.textPanelCellNum}>
                { textPanelThirdNumberVal }
              </div>
              <div className={classes.textPanelCellText}>
                { textPanelThirdNumberLabel }
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // const mapPanelSrcBaseURL = 'https://www.google.com/maps/embed/v1/place?';
  // const mapPanelSrcAPIKey = 'AIzaSyBkQ13r0MFwuwaH3oBDOZ0FBJSD1QF0pBw';
  // const mapPanelSrcAPIKeyQuery = `key=${mapPanelSrcAPIKey}`;
  // const mapPanelSrcLocation = 'Rochester,NY+Philadelphia,PA';
  // const mapPanelSrcLocationQuery = `&q=${mapPanelSrcLocation}`;
  // const mapPanelSrc = `${mapPanelSrcBaseURL}${mapPanelSrcAPIKeyQuery}${mapPanelSrcLocationQuery}`;

  const mapPanel = (
    <div>
      <img className={classes.mapPanelImage} src={ map } />
    </div>
  );

  return (
    <div className={classes.root}>
      <table className={classes.rootTable}>
        <tbody>
          <tr>
            <td className={classes.cell}>
              { textPanel }
            </td>

            <td className={classes.cell}>
              { mapPanel }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}