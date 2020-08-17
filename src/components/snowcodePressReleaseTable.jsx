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

We’d like to introduce you to <b>Snowcode</b>: a tech company with a pool of artists and creatives that create high-end content that anyone can afford.

<br/><br/>

Crafting a brand and showcasing it online is essential for a modern business, but the barrier to entry is astronomically high. Add to that the difficulty of securing a reliable graphic design team, a competent video producer, or even an advertising firm... Many find it easier to neglect the digital aspect of their enterprise.

<br/><br/>

How can a small business or content creator solve these problems? Commissioning projects one at a time will be inefficient and costly. Hiring a dozen specialized employees is, frankly, not possible for most entrepreneurs. High-quality, reliable contracts and partnerships are not easy to come by, and the necessity for them continues to grow exponentially each year.

<br/><br/>

We aim to solve these problems and make your life a whole lot easier. 
<br/>
<b>Because everyone has good ideas.</b>

<br/><br/>

This is a core belief at Snowcode. Creative projects and community platforms should be born on the internet. Portfolios and business pages should be as enjoyable to implement as they are to imagine. What if the essentials of a transformative new idea — programming, graphic design, video production, and audio engineering — could all be accomplished together at once, in-house? What if every freelance commission could blossom into a reliable partnership?

<br/><br/>

We are here to eagerly fit the need most companies have for a proper creative department. Our core talents and specialities are in:
<br/>
<ul>
  <li>web design, development, and deployment</li>
  <li>developing, maintaining, and scaling cross-platform apps</li>
  <li>UI/UX, large-scale artwork, and custom graphic design</li>
  <li>full-stack engineering and production testing</li>
  <li>audio and video production, editing, and filming</li>
  <li>social media branding, including copywriting</li>
</ul>


This is a public commitment to change the way businesses enter the digital world. For non-profits, artists, small businesses, and cutting-edge startups, we offer competitive, market price cost for world-class software. 

<br/><br/>

Reach out today to start a new remote contract or partnership anywhere in the world with Snowcode, a Rochester-based software development and design firm. Learn more and join our newsletter at:
<br/>
<a href="http://snowcode.design/">http://snowcode.design/</a>

<br/><br/>

All the best,<br/>
The Snowcode Team<br/>
☃️🌨❤<br/>

<br/><br/>

<span style={{color: 'rgba(0,0,0,0.5)'}}>
Julian - Lead Engineer<br/>
julian@snowcode.design<br/>
<br/>
Cieo - Lead Designer<br/>
cieo@snowcode.design<br/>
</span>
      </div>

      <div className={classes.share}>
        <SnowcodeShareButtons />
      </div>
    </div>
  );
}
