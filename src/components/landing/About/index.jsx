import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import surfer from 'assets/illustrations/surfer.svg'
import {  AboutWrapper, Details, Thumbnail } from './styles'

export const About = () => (
  <div id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={surfer} alt="Surfer illustration" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
        I'm a business graduate from Universidad de Costa Rica, and I discovered programming 4 years ago. I've been developing as a hobby and professionally ever since. Surfing, guitar and programming are the three things that constitute my free time.
        </p>
        <p>The latter, is something I've become very passionate about. Losing sleep practicing, with lots of tabs always open, and a vast YouTube and Udemy watchlist with new topics to learn.</p>
        <p>I look forward to excercising this passion by working with you!</p>
        <Button as={AnchorLink} href="#contact">
          Let's Talk
        </Button>
      </Details>
    </AboutWrapper>
  </div>
)
