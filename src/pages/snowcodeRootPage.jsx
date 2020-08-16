import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodeLandingJumbotron from '../components/snowcodeLandingJumbotron';
import SnowcodeFeaturesGrid from '../components/snowcodeFeaturesGrid';
import SnowcodeWhatsIncludedTable from '../components/snowcodeWhatsIncludedTable';
import SnowcodeLocationsMap from '../components/snowcodeLocationsMap';
import SnowcodePricingDialog from '../components/snowcodePricingDialog';
import SnowcodeContactUsDialog from '../components/snowcodeContactUsDialog';
import SnowcodeSocialMediaLinks from '../components/snowcodeSocialMediaLinks';
import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';
import SnowcodeNewsletterJumbotron from '../components/snowcodeNewsletterJumbotron';

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

  const handleLogoClick = () => {
    window.location = 'https://snowcode.design/';
  }
  
  const appBarComponent = (
    <SnowcodeAppBar
      theme={ theme }
      onLogoClick={ handleLogoClick }
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
    <SnowcodeRochesterLogo 
      theme={ theme }
      useDark={ true }
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

  const newsletterJumbotronComponent = (
    <SnowcodeNewsletterJumbotron />
  );

  const componentTree = [
    appBarComponent
  ].concat([
    landingJumbotronComponent,
    pricingDialogComponent,
    contactUsDialogComponent
  ].map(e => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.8} animateOnce={true} offset={60}>
        { e }
      </ScrollAnimation>
    );
  })).concat([
    featuresGridComponent,
    locationsMapComponent,
    whatsIncludedTableComponent,
  ].map(e => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeInUp" duration={0.8} animateOnce={true} offset={60}>
        { e }
      </ScrollAnimation>
    );
  })).concat([
    newsletterJumbotronComponent,
  ].map(e => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.8} animateOnce={true} offset={60}>
        { e }
      </ScrollAnimation>
    );
  })).concat([
    socialMediaLinksComponent,
    footerComponent,
  ]);

  return (
    <div className={classes.root}>
      { componentTree }
    </div>
  );
}
