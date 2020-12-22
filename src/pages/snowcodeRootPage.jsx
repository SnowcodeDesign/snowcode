import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodeWhirlBanner from '../components/snowcodeWhirlBanner';
import SnowcodeLandingJumbotron from '../components/snowcodeLandingJumbotron';
import SnowcodeFeaturesGrid from '../components/snowcodeFeaturesGrid';
import SnowcodeWhatsIncludedTable from '../components/snowcodeWhatsIncludedTable';
import SnowcodeLocationsMap from '../components/snowcodeLocationsMap';
import SnowcodeContactUsDialog from '../components/snowcodeContactUsDialog';
import SnowcodeSocialMediaLinks from '../components/snowcodeSocialMediaLinks';
import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';
import SnowcodeNewsletterJumbotron from '../components/snowcodeNewsletterJumbotron';
import SnowcodePortfolioGrid from '../components/snowcodePortfolioGrid';

import { makeStyles } from '@material-ui/core/styles';

import "animate.css/animate.min.css";
import '../css/appearAnimation.css';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  appearAnimation: {
  },

  root: {

    '& > *': {


    }
  }
}));

export default function SnowcodeRootPage({ theme, onBuyNowFormSubmit }) {
  const classes = useStyles();

  const contactUsInitiallyOpen = window.location.search && window.location.search === "?contact"; //pathname && window.location.pathname.length >= '/contact'.length && window.location.pathname.substring(0, '/contact'.length) === '/contact';
  const [contactUsDialogOpen, setContactUsDialogOpen] = React.useState(contactUsInitiallyOpen);

  const handlePricingClick = () => {
    const baseURL = process.env.REACT_APP_FRONT_URL;
    window.location = `${baseURL}/?pricing`;
  }

  const handleContactUsClick = () => {
    setContactUsDialogOpen(true);
  }

  const handleContactUsCloseClick = () => {
    setContactUsDialogOpen(false);
  }

  const handleLogoClick = () => {
    const baseURL = process.env.REACT_APP_FRONT_URL;
    window.location = baseURL;
  }
  
  const appBarComponent = (
    <SnowcodeAppBar
      theme={ theme }
      onLogoClick={ handleLogoClick }
      onPricingClick={ handlePricingClick }
      onBuyNowClick={ handleContactUsClick }
    />
  );

  const whirlBannerComponent = (
    <SnowcodeWhirlBanner
      theme={ theme }
      onLearnMoreClick={ handlePricingClick }
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

  const contactUsDialogComponent = (
    <SnowcodeContactUsDialog 
      open={ contactUsDialogOpen }
      onCloseClick={ handleContactUsCloseClick }
      onFormSubmit={ onBuyNowFormSubmit }
    />
  );

  const socialMediaLinksComponent = (
    <SnowcodeSocialMediaLinks />
  );

  const newsletterJumbotronComponent = (
    <SnowcodeNewsletterJumbotron />
  );

  const portfolioGridComponent = (
    <SnowcodePortfolioGrid />
  );

  const componentTree = [
    appBarComponent,
    whirlBannerComponent,
  ].concat([
    landingJumbotronComponent,
    contactUsDialogComponent
  ].map((e, i) => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.8} animateOnce={true} offset={60} delay={i * 50}>
        { e }
      </ScrollAnimation>
    );
  })).concat([
    featuresGridComponent,
    locationsMapComponent,
    whatsIncludedTableComponent,
    portfolioGridComponent
  ].map((e, i) => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeInUp" duration={0.8} animateOnce={true} offset={60} delay={i * 75}>
        { e }
      </ScrollAnimation>
    );
  })).concat([
    newsletterJumbotronComponent,
  ].map((e, i) => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.8} animateOnce={true} offset={60} delay={i * 100}>
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
