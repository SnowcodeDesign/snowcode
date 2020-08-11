import React from 'react';

import SnowcodeAppBar from '../components/snowcodeAppBar';
import SnowcodeLandingJumbotron from '../components/snowcodeLandingJumbotron';
import SnowcodeFeaturesGrid from '../components/snowcodeFeaturesGrid';
import SnowcodeRochesterLogo from '../components/snowcodeRochesterLogo';

export default function SnowcodeRootPage({ theme }) {

  const appBarComponent = (
    <SnowcodeAppBar />
  );

  const landingJumbotronComponent = (
    <SnowcodeLandingJumbotron 
      theme={ theme }
    />
  );

  const featuresGridComponent = (
    <SnowcodeFeaturesGrid 
      theme={ theme }
    />
  );

  const footerComponent = (
    <SnowcodeRochesterLogo />
  );

  const componentTree = [
    appBarComponent,
    landingJumbotronComponent,
    featuresGridComponent,
    footerComponent
  ];

  return componentTree;
}