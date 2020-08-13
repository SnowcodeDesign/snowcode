import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnowcodeShareButtons from './snowcodeShareButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  super: {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.4)'
  },
  header: {
    fontSize: '2.4rem',
    fontWeight: 500,
  },
  subtitle: {
    fontSize: '1.0rem',
    fontWeight: 500,
  },
  body: {
    paddingTop: 20,
    fontSize: '1.0rem',
    fontWeight: 500,
    paddingBottom: 50,
  },
  share: {
    maxWidth: '490px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 50,
  }
}));

export default function SnowcodePressReleaseTable({}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.super}>
        PRESS RELEASES
      </div>

      <div className={classes.header}>
        Letter to the Community
      </div>

      <div className={classes.subtitle}>
        ROCHESTER, NY &mdash; 12 Aug 2020
      </div>

      <div className={classes.body}>
        We hear you. Making a website is hard. Creating a brand and putting it online is essential for a modern business, but the barrier to entry is astronomically high. We at <b>Snowcode</b> are bent on changing this.

        <br/><br/>

        Creative projects and community platforms should be born on the internet. Portfolios and business pages should be as enjoyable to implement as they are to imagine. What if the essentials of a transformative new product &mdash; programming, graphic design, video production, and audio engineering &mdash; could all be accomplished together at once, in-house?

        <br/><br/>

        We fit the need most companies have for a proper department for technology and creative work, such as website design, cross-platform app development, social media branding, graphic design, and audio-visual production. In many cases, entrepreneurs have enough resources and ideas to run a successful business, and we provide the ideal suite of services to bring their work into the digital world in a rapid amount of time.

        <br/><br/>

        This is a public commitment to change the way businesses enter the digital world. For non-profits, artists, small businesses, and cutting-edge startups, we offer competitive, market price cost for world-class software. Reach out today to start a new remote contract or partnership anywhere in the world with <b>Snowcode</b>, a Rochester-based software development and design firm.

      </div>

      <div className={classes.share}>
        <SnowcodeShareButtons />
      </div>
    </div>
  );
}
