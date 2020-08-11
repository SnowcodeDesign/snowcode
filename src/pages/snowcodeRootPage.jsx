import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodeLandingJumbotron from '../components/snowcodeLandingJumbotron';
import SnowcodeFeaturesGrid from '../components/snowcodeFeaturesGrid';
import SnowcodeWhatsIncludedTable from '../components/snowcodeWhatsIncludedTable';
import SnowcodeLocationsMap from '../components/snowcodeLocationsMap';
import SnowcodePricingDialog from '../components/snowcodePricingDialog';
import SnowcodeContactUsDialog from '../components/snowcodeContactUsDialog';

import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';

export default function SnowcodeRootPage({ theme }) {
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

  const appBarComponent = (
    <SnowcodeAppBar
      theme={ theme }
      onPricingClick={ handlePricingClick }
      onBuyNowClick={ handleContactUsClick }
    />
  );

  const landingJumbotronComponent = (
    <SnowcodeLandingJumbotron 
      theme={ theme }
      onPricingClick={ handlePricingClick }
      onBuyNowClick={ handleContactUsClick }
    />
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
    featuresGridComponent,
    locationsMapComponent,
    whatsIncludedTableComponent,
    footerComponent,
    pricingDialogComponent,
    contactUsDialogComponent
  ];

  return componentTree;
}