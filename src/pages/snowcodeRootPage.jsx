import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodeLandingJumbotron from '../components/snowcodeLandingJumbotron';
import SnowcodeFeaturesGrid from '../components/snowcodeFeaturesGrid';
import SnowcodeWhatsIncludedTable from '../components/snowcodeWhatsIncludedTable';
import SnowcodeLocationsMap from '../components/snowcodeLocationsMap';
import SnowcodePricingDialog from '../components/snowcodePricingDialog';
import SnowcodeContactUsDialog from '../components/snowcodeContactUsDialog';

import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';

import '../css/appearAnimation.css';
import { makeStyles } from '@material-ui/core/styles';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  appearAnimation: {
  },

  root: {

    '& > *': {


    }
  }
}));

export default function SnowcodeRootPage({ theme }) {
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

  const appBarComponent = (
    <SnowcodeAppBar
      theme={ theme }
      onPricingClick={ handlePricingClick }
      onBuyNowClick={ handleContactUsClick }
    />
  );

  const landingJumbotronComponent = (
    <div className={classes.appearAnimation}>
      <SnowcodeLandingJumbotron 
        theme={ theme }
        onPricingClick={ handlePricingClick }
        onBuyNowClick={ handleContactUsClick }
      />
    </div>
  );

  const featuresGridComponent = (
    <SnowcodeFeaturesGrid 
      theme={ theme }
    />
  );

  const locationsMapComponent = (
    <SnowcodeLocationsMap
      theme={ theme }
    />
  );

  const whatsIncludedTableComponent = (
    <SnowcodeWhatsIncludedTable 
      onContactUsClick={ handleContactUsClick } 
    />
  );

  const footerComponent = (
    <SnowcodeRochesterLogo />
  );

  const pricingDialogComponent = (
    <SnowcodePricingDialog 
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

  const componentTree = [
    appBarComponent,
    landingJumbotronComponent,
    pricingDialogComponent,
    contactUsDialogComponent
  ].concat([
    featuresGridComponent,
    locationsMapComponent,
    whatsIncludedTableComponent,
    footerComponent,
  ].map(e => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.4} animateOnce={true} offset={100}>
        { e }
      </ScrollAnimation>
    );
  }))

  return (
    <div className={classes.root}>
      { componentTree }
    </div>
  );
}
