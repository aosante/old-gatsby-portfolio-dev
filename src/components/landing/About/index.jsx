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
        I'm a business graduate from <a href="https://www.ucr.ac.cr/" target="_blank">Universidad de Costa Rica</a>, with a technical degree in Sofwtare Engineering from <a href="https://www.ucenfotec.ac.cr/" target="_blank">Universidad Cenfotec</a>.
        </p>
        <p>I discovered software development 4 years ago, and I've been building apps as a hobby and professionally ever since.</p>
        <p>Surfing, guitar and programming are the three things I enjoy the most, and I look forward to excercising my passion for the latter by working with you!</p>
        <Button as={AnchorLink} href="#contact">
          Let's Talk
        </Button>
      </Details>
    </AboutWrapper>
  </div>
)
