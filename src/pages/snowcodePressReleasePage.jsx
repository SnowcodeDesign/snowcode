import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodePricingDialog from '../components/snowcodePricingDialog';
import SnowcodeContactUsDialog from '../components/snowcodeContactUsDialog';
import SnowcodeSocialMediaLinks from '../components/snowcodeSocialMediaLinks';
import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';
import SnowcodePressReleaseTable from '../components/snowcodePressReleaseTable';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appearAnimation: {
  },

  root: {

    '& > *': {


    }
  }
}));

export default function SnowcodePressReleasePage({ theme }) {
  const classes = useStyles();

  const [pricingDialogOpen, setPricingDialogOpen] = React.useState(false);
  const [contactUsDialogOpen, setContactUsDialogOpen] = React.useState(false);

  const handlePricingClick = () => {
    setPricingDialogOpen(true);
  }

  const handlePricingCloseClick = () => {
    setPricingDialogOpen(false);
  }

  const handleContactUsClick = () => {
    setContactUsDialogOpen(true);
  }

  const handleContactUsCloseClick = () => {
    setContactUsDialogOpen(false);
  }

  const handlePricingGetStartedClick = () => {
    setPricingDialogOpen(false);
    setContactUsDialogOpen(true);
  }

  const handlePricingContactUsClick = () => {
    setPricingDialogOpen(false);
    setContactUsDialogOpen(true);
  }

  const handleLogoClick = () => {
    window.location.pathname = '/';
  }

  const appBarComponent = (
    <SnowcodeAppBar
      theme={ theme }
      onLogoClick={ handleLogoClick }
      onPricingClick={ handlePricingClick }
      onBuyNowClick={ handleContactUsClick }
    />
  );

  const footerComponent = (
    <SnowcodeRochesterLogo 
      theme={ theme }
      useDark={ true }
    />
  );

  const pressReleaseTable = (
    <SnowcodePressReleaseTable 
      theme={ theme }
    />
  );

  const pricingDialogComponent = (
    <SnowcodePricingDialog 
      theme={ theme }
      open={ pricingDialogOpen }
      onCloseClick={ handlePricingCloseClick }
      onGetStartedClick={ handlePricingGetStartedClick }
      onContactUsClick={ handlePricingContactUsClick }
    />
  );

  const contactUsDialogComponent = (
    <SnowcodeContactUsDialog 
      open={ contactUsDialogOpen }
      onCloseClick={ handleContactUsCloseClick }
    />
  );


  const socialMediaLinksComponent = (
    <SnowcodeSocialMediaLinks />
  );

  const componentTree = [
    appBarComponent,
    pressReleaseTable,
    pricingDialogComponent,
    contactUsDialogComponent,
    socialMediaLinksComponent,
    footerComponent,
  ];

  return (
    <div className={classes.root}>
      { componentTree }
    </div>
  );
}
